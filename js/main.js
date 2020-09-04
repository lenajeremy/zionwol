function carouselControls(){
  let background = window.getComputedStyle(document.querySelector('.carousel-item.active')).background
  if(background.indexOf('zion2.gif') != -1){
    document.querySelectorAll('a.nav-link').forEach(link => link.style.color = 'white')
    document.querySelector('#cta-btn').style.backgroundColor = 'blue';
    document.querySelector('.content p').textContent = 'More Than Your Average Engineering Company'
  } else{
    document.querySelectorAll('a.nav-link').forEach(link => link.style.color = 'green')
    document.querySelector('#cta-btn').style.backgroundColor = 'black';
    document.querySelector('.content p').textContent = 'Where Quality and Integrity is our drive...'
  }
}
document.querySelector('.carousel-control-next').onclick = carouselControls
document.querySelector('.carousel-control-prev').onclick = carouselControls