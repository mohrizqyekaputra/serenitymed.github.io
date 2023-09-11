const header = document.getElementById("mainHeader");
let lastScrollTop = 0;
let isNavigating = false;
let navigationTimeout;
var navres = document.getElementById("navres-button");
var linkres = document.getElementById("navigation-bar-responsive");
let linkreson = false;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (!isNavigating) {
        if (scrollTop > lastScrollTop) {
            header.classList.add("scroll-up");
            linkres.classList.add("navres-onscrl");
        } else {
            header.classList.remove("scroll-up");
            linkres.classList.remove("navres-onscrl");
        }
        lastScrollTop = scrollTop;
    }
});

navres.addEventListener("click",function (){
    if (linkreson) {
        linkres.style.display ="none";
        linkreson = false;
    } else {
        linkres.style.display ="flex";
        linkreson = true;
    }
})



















// const navigationLinks = document.querySelectorAll(".navigation-button");

// navigationLinks.forEach(link => {
//     link.addEventListener("click", event => {
//         event.preventDefault();
//         const target = document.querySelector(link.getAttribute("href"));
//         if (target) {
//             isNavigating = true;
//             header.classList.remove("scroll-up");
//             clearTimeout(navigationTimeout); 
//             target.scrollIntoView();
//             navigationTimeout = setTimeout(() => {
//                 isNavigating = false;
//             }, 1000);
//         }
//     });
// });
