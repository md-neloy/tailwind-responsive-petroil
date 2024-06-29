tailwind.config = {
  theme: {
    extend: {
      gap: {
        5.5: "1.188rem",
        6.5: "1.688rem",
        7.5: "27px",
        "72px": "72px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        "842px": "842px",
        "405px": "405px",
        "413px": '413px',
        "339px":"339px",
      },
      height: {
        "410px":"410px",
      },
      fontSize: {
        "16px": "16px",
        "64px":"64px",
      },
      lineHeight:{
        "64px":"64px",
      },
      padding: {
        7.5: "30px",
        "270px": "270px",
        "245px": "245px",
        "136px": "136px",
        "100px": "100px",
        "75px":"75px"
      },
      colors: {
        shadow: "rgb(0,0,0,60%)", 
        lightWhite:"rgb(255,255,255,50%)",
      },
      zIndex: {
        1: '1',
        "1/2":"-1"
      },
      translate: {
        "50%":"-50%",
      },
      left: {
        "3":"3%",
      },
      radius: {
        "47":"47%",
      }
    },
  },
};


$(".slider_banner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  prevArrow: ".slick-prev",
  nextArrow: ".slick-next",
  autoplaySpeed: 2000,
});
$(".img_slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
});

let menuNav = document.getElementById("responsive_nav");
function handleMenu() {
  menuNav.classList.toggle("hidden");
}