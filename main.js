/*============ SHOW MENU =============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
/*======== MENU SHOW =============*/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
// ====== MENU HIDDEN =========
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*============ REMOVE MENU MOBILE =============*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav_link , we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*============ CHANGE BACKGROUND HEADER =============*/
 function scrollHeader(){
     const header =document.getElementById('header');
     //when the scroll is greater than 100 viewpoint height add the scroll-header class to the header tag
     if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
 } 
window.addEventListener('scroll',scrollHeader)

//================= SHOW SCROLL UP=====================
 function scrollup(){
     const scrollup = document.getElementById('scroll-up');
     //When viewport is higher than 200 viewport height, add the show scroll class to the tag with the scroll-top class
     if(this.scrollY >= 200 ) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
 }
window.addEventListener('scroll',scrollup)

/*============ SCROLL SECTIONS ACTIVE LINK =============*/
  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
               document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
          }
          else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
 
          }
      })
  }
window.addEventListener('scroll', scrollActive)



/*============ SCROLL REVEAL ANIMATION =============*/







