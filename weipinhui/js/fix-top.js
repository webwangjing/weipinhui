window.onload=function(){
	var fixtop=document.getElementById('fixtop');
	function scrollEvent(){
		if(document.documentElement.scrollTop||document.body.scrollTop||window.pageYoffset){
			var scrollTop=document.documentElement.scrollTop;
		}
		if(scrollTop>660){
			fixtop.style.display="block";
		}else{
			fixtop.style.display="none";
		}
	}
	setInterval(scrollEvent,500);
}