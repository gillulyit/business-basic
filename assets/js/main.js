const menubutton = document.getElementById("menubutton");
const navlinks = document.getElementById("nav");
const darkswitch = document.getElementById("darkswitch")
let darkmode = localStorage.getItem("darkmode");

function setResponse() {
    if (window.innerWidth > 800) {
        menubutton.style.display = "none";
        navlinks.style.display = "flex";
    } else {
        menubutton.style.display = "block";
        navlinks.style.display = "none";
    }
}

function toggleMenu() {
    if (navlinks.style.display == "none") {
        navlinks.style.display = "flex";
        menubutton.innerText = "Close";
    } else {
        navlinks.style.display = "none";
        menubutton.innerText = "Menu";
    }
}

function enableDarkMode() {
    localStorage.setItem("darkmode", "active");
    document.body.classList.add("dark");
}

function disableDarkMode() {
    localStorage.setItem("darkmode", null);
    document.body.classList.remove("dark");
}

if (darkmode == "active") enableDarkMode();

window.addEventListener("DOMContentLoaded", setResponse)
window.addEventListener("resize", setResponse)
darkswitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode == "active") {
        disableDarkMode()
    } else {
        enableDarkMode()
    }
})