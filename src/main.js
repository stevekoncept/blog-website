import "./style.css";

const blogPage = document.querySelector(".blog-page");
const mainPage = document.querySelector(".main-page");
const moreBlogBtn = document.querySelector(".more-blog-btn");
const homeBtn = document.querySelector(".home-btn");

moreBlogBtn.addEventListener("click", function () {
  if (blogPage.classList.contains("page--inactive")) {
    blogPage.classList.remove("page--inactive");
    mainPage.classList.add("page--inactive");
  }
});

homeBtn.addEventListener("click", function () {
  if (mainPage.classList.contains("page--inactive")) {
    mainPage.classList.remove("page--inactive");
    blogPage.classList.add("page--inactive");
  }
});

// const allsections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove("section--hidden");
//     observer.unobserve(entry.target);
//   });
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allsections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// const nav = document.querySelector(".nav");
// const header = document.querySelector(".header");
// const navHeight = nav.getBoundingClientRect().height;
// const section2 = document.querySelector(".section--2");

// const stickyNav = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);