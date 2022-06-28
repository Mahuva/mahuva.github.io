const openNav = function () {
    let nav = document.querySelector(".nav");
    nav.style.width = "100%";
}

const closeNav = function () {
    let nav = document.querySelector(".nav");
    nav.style.width = "0%";
}

const showCopyright = function () {
    let footer = document.querySelector(".footer");
    footer.innerHTML = "<p>Copyright &copy;" + new Date().getFullYear() + "</p>";
}

const init = function () {
    showCopyright();
}
