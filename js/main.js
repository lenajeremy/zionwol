function carouselControls() {
  let background = window.getComputedStyle(
    document.querySelector(".carousel-item.active")
  ).background;
  if (background.indexOf("zion2.gif") != -1) {
    document
      .querySelectorAll("#header a.nav-link")
      .forEach((link) => (link.style.color = "white"));
    document.querySelector("#cta-btn").style.backgroundColor = "blue";
    document.querySelector(".content p").textContent =
      "More Than Your Average Engineering Company";
  } else {
    document
      .querySelectorAll("#header a.nav-link")
      .forEach((link) => (link.style.color = "rgb(2, 0, 116)"));
    document.querySelector("#cta-btn").style.backgroundColor = "green";
    document.querySelector(".content p").textContent =
      "Where Quality and Integrity is our drive...";
  }
}
document.querySelector(".carousel-control-next").onclick = carouselControls;
document.querySelector(".carousel-control-prev").onclick = carouselControls;
(function () {
  "use strict";

  var owlCarousel = function () {
    new WOW().init();

    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 170,
      center: true,
      smartSpeed: 900,
      nav: true,
      navText: [
        "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
        "<i class='fa carousel-right-arrow fa-chevron-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
          margin: 120,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
          autoplay: true,
          autoplayTimeout: 1500,
          navText: [
            "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
            "<i class='fa carousel-right-arrow fa-chevron-right'></i>",
          ],
        },
      },
    });
  };

//   baguetteBox.run('.tz-gallery', {
//     animation: 'fadeIn',
//     noScrollbars: true
//     });

  $.fn.goTo = function () {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top + "px",
      },
      "slow"
    );
    return this; // for chaining...
  };

  $(function () {
    owlCarousel();
  });
})();

if(window.innerWidth < 740){
    document.querySelector('header#header .logo img').src = 'img/zion-logo(edited).png'
}

document.querySelector('#replacementHeader').style.display = 'none';

window.onscroll = function(){
  if(window.scrollY > 70){
    document.querySelector('header#header').style.display = 'none'
    document.querySelector('#replacementHeader').style.display = 'flex';
  } else{
    document.querySelector('header#header').style.display = 'block'
    document.querySelector('#replacementHeader').style.display = 'none';
  }
}


let replacementHeader = document.querySelector('#replacementHeader');
let normalHeader = document.querySelector('#header');

document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', (e)=>{
  replacementHeader.contains(item) ? setActive(item, replacementHeader) : setActive(item, normalHeader);
}));

function setActive(tobeActiveElement, parent){
  console.log(parent.id)
  parent.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    tobeActiveElement.classList.add('active');
  })
}

function findElement(tobeActiveElement){
  return Array.from(document.querySelectorAll('.nav-item')).find(item => item.firstElementChild.textContent == tobeActiveElement.firstElementChild.textContent && item != tobeActiveElement)
}
// FORM
document.querySelectorAll('input').forEach(input => input.addEventListener('input', function handleChange(event){
    console.log(event.target.name)
    if(event.target.name== "username"){
        
        if(event.target.value === ''){
            console.log('empty')
            setError(event.target)
        } else{
            correctError(event.target)
        }
    } else if(event.target.name == 'email'){
        let regexp = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
        if(regexp.test(event.target.value)){
            correctError(event.target)
        } else{
            setError(event.target)
        }
    }
    function correctError(stuff){
        stuff.style.border = '';
        document.querySelector('.left-image svg').classList.replace('fa-ban', 'fa-check-circle');
        document.querySelector('.left-image svg').classList.replace('text-danger', 'text-success');
    }
    function setError(stuff){
        stuff.style.border = '2px solid red';
        document.querySelector('.left-image svg').classList.replace('fa-check-circle', 'fa-ban');
        document.querySelector('.left-image svg').classList.replace('text-success', 'text-danger');
    }
}))