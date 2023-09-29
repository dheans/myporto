const menu = document.querySelector(".navbar_menu");
const men = document.querySelector(".navbar_nav");

menu.addEventListener("click", ()=>{
  men.classList.toggle("active");
});
