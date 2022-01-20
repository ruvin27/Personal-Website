const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
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
const navbar = document.querySelector('nav');

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
      // Nav Active Changer
      navLinks.forEach((link) => {
        if (entry.target.id == link.getAttribute("href").slice(1)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
      //Home Navbar Bg Changer
      if(entry.target.id == "home"){
        navbar.classList.add("onHome")
        navbar.classList.remove("navbar-dark")
        navbar.classList.remove("bg-dark")
      }
      else{
        navbar.classList.add("navbar-dark")
        navbar.classList.add("bg-dark")
        navbar.classList.remove("onHome")
      }
    }
  });
}, navOptions);

sections.forEach((section) => {
  activeOnScroll.observe(section);
});

const awards = document.querySelectorAll(".award-card");
const onAchievements = new IntersectionObserver(function(entries, onAchievements){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry)
      entry.target.classList.add("appear");
      onAchievements.unobserve(entry.target);
    }
    })  
  }, appearOptions);

  awards.forEach(award => {
    onAchievements.observe(award);
  })