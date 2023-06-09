import { Header } from "./Header.js";
import { ChatBot } from "./ChatBot.js";
import { Slide } from "./Slide.js";
import { Footer } from "./Footer.js";

export class App {
    constructor($target) {
        this.$target = $target;

        this.themeList = ["light", "dark"];

        this.render($target, this.themeList);
    }

    render($target, themeList) {
        $target.innerHTML = "";
        this.header = new Header($target, themeList);

        this.slide = new Slide($target);

        this.chatbot = new ChatBot($target);

        this.footer = new Footer({ $target: $target });
    }
}
