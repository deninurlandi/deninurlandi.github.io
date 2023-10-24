// navbar fixed
window.onscroll = function(){
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   const toTop = document.querySelector('#to-top')

   if(window.scrollY > fixedNav){
      header.classList.add('navbar-fixed')
      toTop.classList.remove('hidden')
      toTop.classList.add('flex')

   }else{
      header.classList.remove('navbar-fixed')
      toTop.classList.remove('flex')
      toTop.classList.add('hidden')
   }
}


// Hamberger
const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu')

hamberger.addEventListener('click', function(){
   hamberger.classList.toggle('hamberger-active');
   navMenu.classList.toggle('hidden')
})

// clik diluar hamberger
window.addEventListener('click', function(e){
   if(e.target != hamberger && e.target != navMenu){
      hamberger.classList.remove('hamberger-active');
      navMenu.classList.add('hidden')
   }
})

// dark mode toggle
const darkToggle = document.querySelectorAll('.dark-toggle');
const html = document.querySelector('html');

const toggles = document.querySelector('.toggle');
const toggleS = document.querySelector('.toggle-1')

darkToggle.forEach((e)=>{
   e.addEventListener('click', function(){
      if(e.checked){
         html.classList.add('dark');
         localStorage.theme = 'dark'
         toggles.classList.add('toggle-circle')
         toggleS.classList.add('toggle-circle')
      }
      else{
         html.classList.remove('dark');
         localStorage.theme = 'light'
         toggles.classList.remove('toggle-circle')
         toggleS.classList.remove('toggle-circle')
      }
      
   })

   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      e.checked = true;
      toggles.classList.add('toggle-circle')
      toggleS.classList.add('toggle-circle')
    } else {
      e.checked = false;
      toggles.classList.remove('toggle-circle')
      toggleS.classList.remove('toggle-circle')
    }
})



// pindahkan posisi 
