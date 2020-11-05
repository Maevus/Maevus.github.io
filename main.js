
// Select elements

const selectElement = (s) => document.querySelector(s);
const navlinks = document.querySelectorAll(".nav-link");

selectElement(".burger").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger").classList.toggle("toggle");

    navlinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index/5+0.1}s`
        }
    });
});