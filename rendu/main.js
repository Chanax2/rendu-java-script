const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", options);

let filterItems = document.querySelectorAll(".filters li");
filterItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    filterItem.classList.add("active");
  });
});

const swiper = new Swiper(".mon-slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 5000,
    },
  });
});

// TAB

let tabs = document.querySelectorAll("li");
let div = document.querySelectorAll(".div-active");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelector(".tab-active").classList.remove("tab-active");
    document.querySelector(".div-active").classList.remove("div-active");

    this.classList.add("tab-active");

  

    if(this.classList.contains("tab-CODE")) {

      document.querySelector(".div-CODE").classList.add("div-active");

    }

    if(this.classList.contains("tab-3D")) {

      document.querySelector(".div-3D").classList.add("div-active");

    }

    if(this.classList.contains("tab-JV")) {

      document.querySelector(".div-JV").classList.add("div-active");

    }
    


  });
});
