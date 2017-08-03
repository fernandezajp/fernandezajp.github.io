var converter = new showdown.Converter({'github_flavouring': true, 'tables': true});

$(document).ready(function(){
	$(window).resize(resize);
	$("#leftpanel").css({"width": 300});
	resize();
});

function resize(){
	var toolbarHeight = $("#toolbar").height();
	var newHeight = $(window).height()-toolbarHeight;
	var containerWidth = $(window).width();

	$("#leftpanel").css({"margin-top": toolbarHeight});
	$("#leftpanel").css({"margin-bottom": 0});
	$("#leftpanel").css({"margin-right": 0});
	$("#leftpanel").css({"height": newHeight});

	$("#rightpanel").css({"margin-top": toolbarHeight});
	$("#rightpanel").css({"width": containerWidth-301});
	$("#rightpanel").css({"height": newHeight});
}

function md2html(source){
	return converter.makeHtml(source);
}

function loadMDFile(path, ready){
	$.get(path, function(data) {
	    var converted = md2html(data);
	    $("#rightpanel").empty();
	    $("#rightpanel").append(converted);
	    if(typeof ready!=='undefined')
	    	ready("listo");
    });
}