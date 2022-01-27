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
    }
  });
}, navOptions);

sections.forEach((section) => {
  activeOnScroll.observe(section);
});

const awards = document.querySelectorAll(".award-card");
const onAchievements = new IntersectionObserver(function (
  entries,
  onAchievements
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      onAchievements.unobserve(entry.target);
    }
  });
},
appearOptions);

awards.forEach((award) => {
  onAchievements.observe(award);
});

const titles = document.querySelectorAll(".title");
const titleUnderlines = document.querySelectorAll(".title-underline");

const onTitles = new IntersectionObserver(function (entries, onTitles) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("title-appear");
      onTitles.unobserve(entry.target);
    }
  });
}, appearOptions);

titles.forEach((title) => {
  onTitles.observe(title);
});

const onTitlesUnderlines = new IntersectionObserver(function (
  entries,
  onTitlesUnderlines
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("title-appear");
      onTitlesUnderlines.unobserve(entry.target);
    }
  });
},
appearOptions);

titleUnderlines.forEach((underline) => {
  onTitlesUnderlines.observe(underline);
});

const timelines = document.querySelectorAll(".timeline-box");
const onTimeline = new IntersectionObserver(function (
  entries,
  onTimeline
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      onTimeline.unobserve(entry.target);
    }
  });
},
appearOptions);

timelines.forEach((timeline) => {
  onTimeline.observe(timeline);
});