{
    const welcome = () => {
        console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają! :) ");
    }

    const toggleBackground = () => {
        const container = document.querySelector(".container");
        const nextColorName = document.querySelector(".js--nextColorName");

        container.classList.toggle("newColor");
        nextColorName.innerText = container.classList.contains("newColor") ? "szary" : "turkusowy";
    };

    const onHideHeadingButtonClick = () => {
        const hideHeadingButton = document.querySelector(".js--hideHeadingButton");
        const heading = document.querySelector(".section__heading");

        heading.classList.toggle("hidden");
        hideHeadingButton.innerText = heading.classList.contains("hidden") ? "Pokaż nagłówek" : "Ukryj nagłówek";
    };

    const init = () => {

        const changeBackgroundButton = document.querySelector(".js--changeBackgroundButton");
        const hideHeadingButton = document.querySelector(".js--hideHeadingButton");
        hideHeadingButton.addEventListener("click", onHideHeadingButtonClick);
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();

    };

    init();


}
