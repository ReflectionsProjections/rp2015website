var scrollVal = 0;

var layer1 = document.getElementById("layer-1");
var layer2 = document.getElementById("layer-2");

function parallaxy()
{   
	offset2 = -(scrollVal * 0.5);
	offset1 = (scrollVal * 0.5);

	layer1.style.webkitTransform = "translate3d(0," + offset1 + "px, 0)";
	layer1.style.MozTransform = "translate3d(0," + offset1 + "px, 0)";
	layer1.style.msTransform = "translateY(" + offset1 + "px)";
	layer1.style.OTransform = "translate3d(0," + offset1 + "px, 0)";
	layer1.style.transform = "translate3d(0," + offset1 + "px, 0)";
    
    layer2.style.webkitTransform = "translate3d(0," + offset2 + "px, 0)";
	layer2.style.MozTransform = "translate3d(0," + offset2 + "px, 0)";
	layer2.style.msTransform = "translateY(" + offset2 + "px)";
	layer2.style.OTransform = "translate3d(0," + offset2 + "px, 0)";
	layer2.style.transform = "translate3d(0," + offset2 + "px, 0)";
}


function scrollHandler(e)
{
	scrollVal = Math.max(window.pageYOffset,0);
    if (scrollVal <= 2000) parallaxy();
}

document.addEventListener('scroll', scrollHandler, false);