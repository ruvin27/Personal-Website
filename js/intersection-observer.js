const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 1,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const navOptions = {
  threshold: 0.3,
  root: null,
  rootMargin: "50px",
};

const activeOnScroll = new IntersectionObserver(function (entries, navOptions) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      navLinks.forEach((link) => {
        if (entry.target.id == link.getAttribute("href").slice(1)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}, navOptions);

sections.forEach((section) => {
  activeOnScroll.observe(section);
});

const navBgOptions = {
  threshold : 0.3,
  rootMargin: "-150px"
}

const navbar = document.querySelector('nav');

const onHome = new IntersectionObserver(function(entries, onHome){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navbar.classList.add("onHome")
      navbar.classList.remove("navbar-dark")
      navbar.classList.remove("bg-dark")
    }
    else{
      navbar.classList.add("navbar-dark")
      navbar.classList.add("bg-dark")
      navbar.classList.remove("onHome")
    }
    })  
  }, navBgOptions);

onHome.observe(sections[0]);