// navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamberger
const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function () {
  hamberger.classList.toggle('hamberger-active');
  navMenu.classList.toggle('hidden');
});

// clik diluar hamberger
window.addEventListener('click', function (e) {
  if (e.target != hamberger && e.target != navMenu) {
    hamberger.classList.remove('hamberger-active');
    navMenu.classList.add('hidden');
  }
});

// dark mode toggle
const darkToggle = document.querySelectorAll('.dark-toggle');
const html = document.querySelector('html');

const toggles = document.querySelector('.toggle');
const toggleS = document.querySelector('.toggle-1');

darkToggle.forEach((e) => {
  e.addEventListener('click', function () {
    if (e.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
      toggles.classList.add('toggle-circle');
      toggleS.classList.add('toggle-circle');
    } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
      toggles.classList.remove('toggle-circle');
      toggleS.classList.remove('toggle-circle');
    }
  });

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    e.checked = true;
    toggles.classList.add('toggle-circle');
    toggleS.classList.add('toggle-circle');
  } else {
    e.checked = false;
    toggles.classList.remove('toggle-circle');
    toggleS.classList.remove('toggle-circle');
  }
});

// pindahkan posisi

const contact = document.querySelector('#contact');
const form = document.querySelector('form');
const contactPar = document.querySelector('.contact-parr');
const aboutPar = document.querySelector('.about-parr');
const imgHero = document.querySelector('.img-hero');
const home = document.querySelector('#home');
const tentangPar = document.querySelector('.tentang-parr');
const freindPar = document.querySelector('.friend-parr');
const portPar = document.querySelector('.port-parr');
const resiPar = document.querySelector('.resi-parr');
const gridPar = document.querySelector('.grid-parr');
const todoPar = document.querySelector('.todo-parr');
const suwitPar = document.querySelector('.suwit-parr');
const clientPar = document.querySelector('.client-parr');
const imgClient = document.querySelectorAll('.client-img');
const blogPar = document.querySelector('.blog-start');
const orgPar = document.querySelector('.org-parr');
const komPar = document.querySelector('.komp-parr');
const codPar = document.querySelector('.cod-parr');

window.addEventListener('load', function () {
  aboutPar.classList.add('tampil-icon');
  aboutPar.classList.remove('-translate-x-40');
  aboutPar.classList.remove('opacity-0');
  setTimeout(() => {
    imgHero.classList.add('tampil-icon');
    imgHero.classList.remove('translate-x-40');
    imgHero.classList.remove('opacity-0');
  }, 500);
});

window.addEventListener('scroll', function () {
  let wScroll = this.scrollY;
  if (wScroll > tentangPar.offsetTop - 620) {
    tentangPar.classList.remove('hidden-icon-ab');
    tentangPar.classList.add('tampil-icon');
  }
  if (wScroll > freindPar.offsetTop - 750) {
    freindPar.classList.remove('hidden-icon-friend');
    freindPar.classList.add('tampil-icon');
  }

  if (wScroll > portPar.offsetTop - 750) {
    portPar.classList.remove('hidden-port');
    portPar.classList.add('tampil-icon');
  }
  if (wScroll > resiPar.offsetTop - 750) {
    resiPar.classList.remove('hidden-proj');
    resiPar.classList.add('tampil-icon');
  }
  if (wScroll > gridPar.offsetTop - 750) {
    gridPar.classList.remove('hidden-grid');
    gridPar.classList.add('tampil-icon');
  }
  if (wScroll > todoPar.offsetTop - 750) {
    todoPar.classList.remove('hidden-proj');
    todoPar.classList.add('tampil-icon');
  }
  if (wScroll > suwitPar.offsetTop - 750) {
    suwitPar.classList.remove('hidden-grid');
    suwitPar.classList.add('tampil-icon');
  }
  if (wScroll > clientPar.offsetTop - 750) {
    clientPar.classList.remove('hidden-client');
    clientPar.classList.add('tampil-icon');
  }

  if (wScroll > clientPar.offsetTop - 700) {
    imgClient.forEach((a, b) => {
      setTimeout(
        () => {
          a.classList.remove('hidden-img-client');
          a.classList.add('tampil-icon');
        },
        300 * (b + 1),
      );
    });
  }

  if (wScroll > blogPar.offsetTop - 750) {
    blogPar.classList.remove('hidden-blog');
    blogPar.classList.add('tampil-icon');
  }
  if (wScroll > orgPar.offsetTop - 750) {
    orgPar.classList.remove('hidden-blog-s');
    orgPar.classList.add('tampil-icon');
  }
  if (wScroll > komPar.offsetTop - 750) {
    komPar.classList.remove('hidden-blog-e');
    komPar.classList.add('tampil-icon');
  }
  if (wScroll > codPar.offsetTop - 750) {
    codPar.classList.remove('hidden-blog-s');
    codPar.classList.add('tampil-icon');
  }

  if (wScroll > contact.offsetTop - 580) {
    form.classList.add('tampil-icon');
    form.classList.remove('opacity-0');
    form.classList.remove('translate-x-48');
  }
  if (wScroll > contact.offsetTop - 480) {
    contactPar.classList.add('tampil-icon');
    contactPar.classList.remove('-translate-y-36');
    contactPar.classList.remove('opacity-0');
  }
});
