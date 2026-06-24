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

const sideResponsiveBar = document.getElementById("resp-menu-bar");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const respHomeBtn = document.querySelector(".resp-home-btn");
const recentPostBtn = document.querySelector(".recent-post-btn");
const moreBlogBtn2 = document.querySelector(".more-blog--btn");
const subscribeBtn = document.querySelector(".subscribe-btn");
const sections = document.querySelectorAll("section");
//

openMenu.addEventListener("click", () => {
  sideResponsiveBar.classList.remove("-translate-x-[500px]");
  document.body.classList.toggle("no-scroll");
});


closeMenu.addEventListener("click", () => {
  sideResponsiveBar.classList.add("-translate-x-[500px]");
  document.body.classList.remove("no-scroll");
});

const removeScroll = function () {
  document.body.classList.remove("no-scroll");
  sideResponsiveBar.classList.remove("translate-x-0");
  sideResponsiveBar.classList.add("-translate-x-[500px]");
};

respHomeBtn.addEventListener("click", removeScroll);
recentPostBtn.addEventListener("click", removeScroll);
moreBlogBtn2.addEventListener("click", removeScroll);
subscribeBtn.addEventListener("click", removeScroll);
