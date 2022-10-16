const hamburgerMenu=document.getElementById('hamburger-menu');
const cover=document.getElementById('cover');
const closeMenu=document.getElementById('close-menu');
const viewMore=document.getElementById('view-more');
const viewMore2=document.getElementById('view-more2');

hamburgerMenu.addEventListener('click',()=>{
  cover.classList.add('show');
  closeMenu.classList.add('active');
  hamburgerMenu.classList.add('invisible');
});

closeMenu.addEventListener('click',()=>{
  cover.classList.remove('show');
  closeMenu.classList.remove('active');
  hamburgerMenu.classList.remove('invisible');
});

