AxThree = function () {
    // private variables
    var axScene;
    var axRenderer;
    var axViewport;
    var domElement;

    var axMainCamera;

    var axAmbientLight;

    var axClock = new THREE.Clock();
    var axAllowAnimate = false;

    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();

    var selectionBox = null;
    var boxHelper = null;

    var EventsControls = null;

    var scope = this;

    // loaders
    var stlLoader;

    // public variables
    this.axCameraControls;
    this.typeofCamera = 0; // Perspective = 0, Ortho = 1
    this.backColor = 0xffffff;
    this.alpha = 1;
    this.fov = 45;
    this.near = 1;
    this.far = 1000;

    this.useSTLloader = false;

    this.onmeshclick = null;
    this.drawselectionbox = true;

    this.init = function (viewport) {
        domElement = document.getElementById(viewport);
        // Create Renderer
        axRenderer = Detector.webgl? new THREE.WebGLRenderer({antialias: true}): new THREE.CanvasRenderer();
        axRenderer.setSize(document.getElementById(viewport).clientWidth, document.getElementById(viewport).clientHeight);
        axRenderer.setClearColor( this.backColor, this.alpha);
        document.getElementById(viewport).appendChild(axRenderer.domElement);
        axViewport = viewport;

        // Create Scene
        axScene = new THREE.Scene();

        // Create Main Camera
        //axMainCamera = new THREE.PerspectiveCamera(scope.fov, document.getElementById(viewport).clientWidth / document.getElementById(viewport).clientHeight, scope.near, scope.far);
        axMainCamera = new THREE.CombinedCamera(window.innerWidth / 2, window.innerHeight / 2, scope.fov, scope.near, scope.far, scope.near, scope.far);
        //axMainCamera = new THREE.CombinedCamera(window.innerWidth / 2, window.innerHeight / 2, scope.fov, scope.near, scope.far, 0, 5000);
        //axMainCamera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 );
        this.camera = axMainCamera;

        // Events
        EventsControls = new window.EventsControls( this.camera, axRenderer.domElement );
        EventsControls.attachEvent( 'onclick', function(button) {
            if (boxHelper != null)
                axScene.remove(boxHelper);
            if (button==2)
                return;
            if (scope.onmeshclick != null)
                scope.onmeshclick(this.focused, button);

            //var edges = new THREE.EdgesGeometry(this.focused.geometry);
            //var line = new THREE.LineSegments(edges);
            //axScene.add(edges);

            if (scope.drawselectionbox){
                boxHelper = new THREE.BoxHelper(this.focused);
                //boxHelper.material.depthTest = false;
                axScene.add(boxHelper);
            }
        });
        selectionBox = new THREE.Box3();

        // Camera Mouse
        this.axCameraControls = new THREE.OrbitControls(axMainCamera, axRenderer.domElement);
        this.axCameraControls.target.set(0, 0, 0);

        domElement.addEventListener("mousedown", axMousedown, true);
        domElement.addEventListener("mouseup", axMouseup, true);
        domElement.addEventListener("resize", axResize, true);

        domElement.addEventListener("DOMMouseScroll", axMousewheel, true);
        domElement.addEventListener("mousewheel", axMousewheel, true);

        if (this.useSTLloader)
            stlLoader = new THREE.STLLoader();
    }

    // private events
    var axAnimate = function() {
        if (axAllowAnimate == true) {
            window.requestAnimationFrame(axAnimate);
            scope.render();
        }
    }

    var axMousedown = function(e) {
        axAllowAnimate = true;
        axAnimate();
    }

    var axMouseup = function(e) {
        axAllowAnimate = false;
    }

    var axResize = function(e) {
        var WIDTH = document.getElementById(axViewport).clientWidth,
            HEIGHT = document.getElementById(axViewport).clientHeight;
        axRenderer.setSize(WIDTH, HEIGHT);
        axMainCamera.aspect = WIDTH / HEIGHT;
        axMainCamera.updateProjectionMatrix();
        scope.render();
    }

    var axMousewheel = function(e) {
        e.preventDefault();
        scope.render();
        return false;
    }

    this.setCameraPosition = function(x,y,z){
        axMainCamera.position.x = x;
        axMainCamera.position.y = y;
        axMainCamera.position.z = z;
        axMainCamera.lookAt(axScene.position);
    }

    this.addSceneObject = function(object){

        axScene.add(object);
    }

    this.addDirectionalLight = function(color, intensity, x, y, z){
        light = new THREE.DirectionalLight(new THREE.Color(color), intensity);
        light.position.set(x, y, z);
        axScene.add(light);
    }

    this.setAmbientLight = function(color){
        if (typeof axAmbientLight != 'undefined')
            axScene.remove( axAmbientLight );
        axAmbientLight = new THREE.AmbientLight(color);
        axScene.add(axAmbientLight);
    }

    this.loadSTLmesh = function(path, material){
        stlLoader.load(path, function (object) {
            var mesh = new THREE.Mesh(smoothFaces(object), material);
            scope.addSceneObject(mesh);
            scope.render();
            EventsControls.attach(mesh);
        });
    }

    this.render = function(){
        this.axCameraControls.update(axClock.getDelta());
        axRenderer.render(axScene, axMainCamera);
    }

    var smoothFaces = function(object){
        object.computeBoundingBox();
        object.computeVertexNormals();

        var attrib = object.getAttribute('position');
        if(attrib === undefined) {
            return;
        }
        var positions = attrib.array;
        var vertices = [];
        for(var i = 0, n = positions.length; i < n; i += 3) {
            var x = positions[i];
            var y = positions[i + 1];
            var z = positions[i + 2];
            vertices.push(new THREE.Vector3(x, y, z));
        }
        var faces = [];
        for(var i = 0, n = vertices.length; i < n; i += 3) {
            faces.push(new THREE.Face3(i, i + 1, i + 2));
        }

        var geometry = new THREE.Geometry();
        geometry.vertices = vertices;
        geometry.faces = faces;
        geometry.computeFaceNormals();
        geometry.mergeVertices();
        geometry.computeVertexNormals();

        var buffer_g = new THREE.BufferGeometry();
        buffer_g.fromGeometry(geometry);

        return buffer_g;
    }

    this.boundingBox = function(){
        var bbox = null;
        for(var i = 0; i < axScene.children.length; i++){
            var obj = axScene.children[i];
            if (obj.geometry != undefined){
                obj.geometry.computeBoundingBox();
                if (bbox==null)
                    bbox = obj.geometry.boundingBox;
                else
                    bbox.union(obj.geometry.boundingBox);
            }
        }
        return bbox;
    }

    this.toPerspective = function(){
        axMainCamera.toPerspective();
        //axMainCamera.zoom = 1;
        scope.render();
    }

    this.toOrthographic = function(){
        axMainCamera.toOrthographic();
        scope.render();
    }

    this.viewTop = function(){
        this.axCameraControls.viewTop();
        scope.render();
    }

    this.viewBottom = function(){
        this.axCameraControls.viewBottom();
        scope.render();
    }

    this.viewFront = function(){
        this.axCameraControls.viewFront();
        scope.render();
    }

    this.viewLeft = function(){
        this.axCameraControls.viewLeft();
        scope.render();
    }

    this.viewRight = function(){
        this.axCameraControls.viewRight();
        scope.render();
    }

    this.viewBack = function(){
        this.axCameraControls.viewBack();
        scope.render();
    }
}