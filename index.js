var interval;
window.addEventListener('wheel', function(event){
	if(interval!=null && event.deltaY < 0){
		clearInterval(interval);
	}
});
var links= document.querySelectorAll('a');
for(var i=0 ; i< links.length ; i++)
{
	links[i].addEventListener('click',function(event){
		section= document.getElementById(this.title);
		finalY=section.getBoundingClientRect().top;
		event.preventDefault();
		interval= setInterval(function(){

			window.scrollTo(window.scrollX, window.scrollY + 10);

			if(window.scrollY > finalY){
				clearInterval(interval);
			}

		},40);

	});
};
