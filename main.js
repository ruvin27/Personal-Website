const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-dark .navbar-nav .nav-item");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-dark .navbar-nav li");

function activeMenu(){
    let len = sections.length;
    while(--len && window.scrollY + 97 < sections[len].offsetTop){}
        navLi.forEach(ltx.classList.remove("active"));
        navLi[len].classList.add("active");
    activeMenu();
    window.addEventListener("scroll", activeMenu);
}