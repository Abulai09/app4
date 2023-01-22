//menu
const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

if(burger && menu) {
    burger.addEventListener( 'click',()=>{
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        body.classList.toggle('_lock')
    } )
}


const header = document.querySelector('.header')
const headerH = document.querySelector('.header').clientHeight

document.onscroll = function(){
    let scroll = window.scrollY

    if(scroll>headerH){
        header.classList.add('fixed')
        
    } else {
        header.classList.remove('fixed')
    }
}



const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if(menuLinks.length>0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click',onMenuLinkClick)
    })

    function onMenuLinkClick(e){
        const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

            window.scrollTo({
                top:gotoBlockValue,
                behavior:'smooth'
            })
            e.preventDefault();
        }
    }

}


const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".popular-slider-next",
    prevEl: ".popular-slider-prev",
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 3,
    },
    790: {
      slidesPerView: 2,
    },
  },
});