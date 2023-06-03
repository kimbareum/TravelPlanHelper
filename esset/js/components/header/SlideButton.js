export default class SlideButton {
    constructor({ $header }) {
        const slide_button = document.createElement("aside");
        slide_button.className = "slide-button";
        const button = document.createElement("img");
        button.src = "./esset/img/exchange.png";
        button.alt = "슬라이드 전환";

        slide_button.append(button);

        $header.append(slide_button);
    }
}