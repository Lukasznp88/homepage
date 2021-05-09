console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają! :) ");

let hideHeadingButton = document.querySelector(".js--hideHeadingButton");
let heading = document.querySelector(".section__heading");


let changeBackgroundButton = document.querySelector(".js--changeBackgroundButton");
let container = document.querySelector(".container");
let nextColorName = document.querySelector(".js--nextColorName");

hideHeadingButton.addEventListener("click", () => {
    heading.classList.toggle("hidden");

    hideHeadingButton.innerText = heading.classList.contains("hidden") ? "Pokaż nagłówek" : "Ukryj nagłówek";
});

changeBackgroundButton.addEventListener("click", () => {
    container.classList.toggle("newColor");

    nextColorName.innerText = container.classList.contains("newColor") ? "szary" : "turkusowy";
});


