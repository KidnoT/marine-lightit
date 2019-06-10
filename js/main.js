//Search 
function openbox(box) {
  display = document.getElementById(box).style.display;

    // open box
  if (display == "none") {
    document.getElementById(box).style.display = "block";
  } else {
    document.getElementById(box).style.display = "none";

  }
}



//Carousel

		$('#owl-one').owlCarousel({
    loop:true,
    dots: false,
 autoplay:true,
 margin: 2,
    responsiveClass:true,
 responsiveRefreshRate: 50,
    responsive:{
        320:{
            items:1,
            nav:false
        },
        480:{
            items:2,
            nav:false
        },
  768:{
   items: 3,
   nav:false
  },
        1000:{
            items:4,
            nav:false,
            loop:true
        },
  1200:{
            items:5,
            nav:false,
            loop:true
        }
    }
});

$('#owl-two').owlCarousel({
  loop:false,
  dots: false,
autoplay:false,
margin: 4,
  responsiveClass:true,
responsiveRefreshRate: 50,
  responsive:{
      320:{
          items:1,
          nav:true
      },
      480:{
          items:2,
          nav:true
      },
768:{
 items: 3,
 nav:true
},
      1000:{
          items:4,
          nav:false,
          
      },
1200:{
          items:4,
          nav:false,
          
      }
  }
})