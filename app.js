// navbar fixed
window.onscroll = function(){
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;

   if(window.scrollY > fixedNav){
      header.classList.add('navbar-fixed')
   }else{
      header.classList.remove('navbar-fixed')
   }
}


// Hamberger
const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu')

hamberger.addEventListener('click', function(){
   hamberger.classList.toggle('hamberger-active');
   navMenu.classList.toggle('hidden')
})