const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
linksArray = [...linksHead, mainScroll];

linksArray.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const ID = event.target.getAttribute("href").slice(1);

        document.getElementById(ID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});
