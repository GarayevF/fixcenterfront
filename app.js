const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.querySelector(".answer");
    const question = q.querySelector(".question");
    const qa = q.querySelector(".question-answer");
    if(answer.classList.contains("show")){
        answer.style.height = "0px";
        answer.classList.remove("show")
    }else{
        answer.style.height = answer.scrollHeight + 5 + "px";
        answer.classList.add("show")
    }
  });
});



// let featureLayer;
//     async function initMap() {
//         // Request needed libraries.
//         await google.maps.importLibrary("maps");
//         // Get the gmp-map element.
//         const mapElement = document.querySelector("gmp-map");
//         // Get the inner map.
//         const innerMap = mapElement.innerMap;
        
//         // Get the feature layer.
//         featureLayer = innerMap.getFeatureLayer(google.maps.FeatureType.LOCALITY);
        
        
//         // Define a style with purple fill and border.
//         const featureStyleOptions = {
//             strokeColor: '#810FCB',
//             strokeOpacity: 1.0,
//             strokeWeight: 3.0,
//             fillColor: '#810FCB',
//             fillOpacity: 0.5
//         };
//         // Apply the style to a single boundary.
//         featureLayer.style = (options) => {
//             if (options.feature.placeId == 'ChIJ0zQtYiWsVHkRk8lRoB1RNPo') { // Hana, HI
//                 return featureStyleOptions;
//             }
//         };
        
//     }
//     initMap();

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper1 = new Swiper('.swiper-aboutus', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});