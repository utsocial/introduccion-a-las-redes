function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
var manifest = [
			{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"}
	];


	return manifest;			
});

(slideViewDidLoad = function(){
	if($(window).innerWidth() >=470)
{
	//$('html').css("overflow", "hidden");
	document.body.style.setProperty ("overflow", "hidden", "important");
  
} else {
 
}
});



