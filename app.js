const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const imageContainer = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
console.log("header height: " + header_height);

let section_height = section.offsetHeight;
console.log("section height: " + section_height);

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    console.log(sectionY.top);
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach( element => {
        element.style.opacity = scroll / (sectionY.top + section_height) + 0.3;
    })

    big_title.style.opacity = - scroll / (header_height / 6) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 65.95 - 50}px)`;
    imageContainer.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -65.95 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
});