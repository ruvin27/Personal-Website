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
console.log(sections);

const navOptions = {
  threshold: 0.6,
  root: null,
  rootMargin: "-50px -200px",
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
