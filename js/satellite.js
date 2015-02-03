var sid = 38782;
var lat;
var lng;
var step;
var counter=0;
var satname='ISS';
var url = 'http://www.n2yo.com/sat/wgt.php?s='+sid+'&rk='+eval(Math.random()*Date.parse(new Date()))+'&callback=?';
var data;
var dArray = new Array();
var altitude;
var sunOverlay;
var dayNightOverlay;

function ObjectPosition(a,b,c,d,e)
{
	this.id=a;
	this.lat=b;
	this.lng=c;
	this.alt=d;
	this.sp=e;
}

function addVRSS1(lat, lng, alt)
{
	document.getElementById('ifrmCesium').contentWindow.cameratoVRSS1(lat, lng, alt);
	document.getElementById('ifrmCesium').contentWindow.addVRSS1(lat, lng, alt);
}

function moveVRSS1(lat, lng, alt)
{
	var Cesium = document.getElementById('ifrmCesium').contentWindow.Cesium;
	var ellipsoid = document.getElementById('ifrmCesium').contentWindow.ellipsoid;

	document.getElementById('ifrmCesium').contentWindow.moveVRSS1(lat, lng, alt);

	var modelMatrix = Cesium.Transforms.northEastDownToFixedFrame(
                ellipsoid.cartographicToCartesian(Cesium.Cartographic.fromDegrees(lng, lat)));
        modelMatrix = Cesium.Matrix4.multiply(
                modelMatrix,
                Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(0.0, 0.0, -alt)),
                modelMatrix);
    document.getElementById('ifrmCesium').contentWindow.VRSS1rectangularSensor.modelMatrix = modelMatrix;
}

function animateSat()
{
	var currPos = getInterpolatedData();

	if (currPos != null)
	{
		var clat = currPos.lat;
		var clng = currPos.lng;
		var calt = currPos.alt;
		var csp = currPos.sp;

		var dir = "";
		if (calt>altitude) 
			dir = "&uarr;";
		else 
			dir = "&darr;";
		altitude = calt;
		
		$("#splat").text(clat.toFixed(2));
		$("#splon").text(clng.toFixed(2));
		$("#spalt").text(calt.toFixed(2));
		$("#spspd").text(csp.toFixed(2));

		moveVRSS1(clat,clng,calt*1000);
	}
	counter++;
}

function loadData()
{
	jQuery.getJSON(url, function(data) {
		var startPoint = parseInt(data.start);
		var startPosition;
		var currentTime = new Date()
		var dd=currentTime.toGMTString();
		var cUTCTime=Date.parse(dd)/1000;
		var txtArray = new Array();

		step = parseInt(data.step);
		satname = data.name;

		for (var i=0;i<data.pos.length;i++)
			txtArray.push(data.pos[i].d);

		for (var i=startPoint;i<txtArray.length;i++)
		{
			var coord = txtArray[i].split("|");
			if (Math.abs(cUTCTime-parseInt(coord[3]))<step)
			{
				startPosition=i;
				break;
			}
		}

		dArray = new Array(); 
		for (var i=startPosition;i<txtArray.length;i++)
		{
			var coord = txtArray[i].split("|");
			dArray[i-startPosition] = new ObjectPosition(sid,coord[0],coord[1],parseFloat(coord[2]),parseFloat(coord[4]));
		}
		
		addVRSS1(dArray[0].lat*1,dArray[0].lng*1,dArray[0].alt*1000);
	});
}

function getInterpolatedData()
{
	var interval = Math.floor(counter/step);
	if ((dArray.length !=0)&&(dArray.length-2>interval))
	{
		if(Math.abs((dArray[interval+1].lng) - (dArray[interval].lng))>300)
		{
			if ((dArray[interval+1].latlng).lng() < 0) 
			{
				var dlng = (parseFloat(dArray[interval+1].lng) + 360 - parseFloat(dArray[interval].lng))/step;
			}
			else
			{
				var dlng = (parseFloat(dArray[interval+1].lng) - 360 - parseFloat(dArray[interval].lng))/step;
			}
		}
		else
		{
			var dlng = (parseFloat(dArray[interval+1].lng) - parseFloat(dArray[interval].lng))/step;
		}
		var dlat = (parseFloat(dArray[interval+1].lat) - parseFloat(dArray[interval].lat))/step;
		var dalt = (dArray[interval+1].alt - dArray[interval].alt)/step;
		var dsp = (dArray[interval+1].sp - dArray[interval].sp)/step;
		var plat = dlat*(counter%step)+parseFloat(dArray[interval].lat);
		var plng = dlng*(counter%step)+parseFloat(dArray[interval].lng);
		var palt = dalt*(counter%step)+dArray[interval].alt;
		var psp = getSpeed(plat, dlat, dlng, palt);

		var iObject = new ObjectPosition(sid,plat,plng,palt,psp);
		return iObject;
	}
	else if (dArray.length-2>interval)
	{
		loadData();
		counter=0;
		setInterval ("animateSat()", 1000);		
	}
}

function getSpeed(x1, dx, dy, h)
{
	var dlat=dx*Math.PI/180;
	var dlon=dy*Math.PI/180;
	var lat1=x1*Math.PI/180;
	var lat2=(x1+dx)*Math.PI/180;
	var a = Math.sin(dlat/2) * Math.sin(dlat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon/2) * Math.sin(dlon/2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var speed = (h + 6378.135) * c;
	return speed;
}