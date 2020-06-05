/*--------------------------------
		Header Logo Hiding
--------------------------------*/

const logo = document.querySelector(".logo-light");
const nav_l = document.querySelector('.nav-l');
const nav_r = document.querySelector('.nav-r');
const introSect = document.querySelector("#inicio");

const introScrollOps = {
	root: null,
	threshhold: 0,
	rootMargin: "-45%"
};

const introScrollObserver = new IntersectionObserver(function(entries, introScrollObserver) {
	entries.forEach(entry => {
		if(!entry.isIntersecting){
			nav_l.classList.add('width-45');
			nav_l.classList.remove('width-50');
			nav_r.classList.add('width-45');
			nav_r.classList.remove('width-50');
			logo.classList.add('logo-display');
		}
		else {
			logo.classList.remove('logo-display');
			nav_l.classList.remove('width-45');
			nav_l.classList.add('width-50');
			nav_r.classList.remove('width-45');
			nav_r.classList.add('width-50');
		}
	})
}, introScrollOps);

introScrollObserver.observe(introSect);

/*--------------------------------
	 Intro BG Video VP Change
--------------------------------*/

jQuery(document).ready(function($){
	var winWidth = $(window).width();
	var maxWidth = 767;

    if(winWidth < maxWidth){

            //add the class hidden to .jobFilter         
            $(".jobfilter").addClass("hidden");

         }//end if then



$(window).resize(function(){//begin resize event


    //get the window width
     var winWidth =  $(window).width();

      //set the maxWidth
     var maxWidth = 1000;    


         //if the window width is less than maxWidth pixels
         if(winWidth < maxWidth){//begin if then

            //add the class hidden to .jobFilter         
            $(".jobfilter").addClass("hidden");

         }
         else{

            //remove the class hidden                 
            $(".jobfilter").removeClass("hidden");


		}
	});
});