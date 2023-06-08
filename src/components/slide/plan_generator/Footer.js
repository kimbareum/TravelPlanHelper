import IMG_SRC from "../../../data/imgPaths.js";
import { makeBox, makeTextBox } from "../../common/commonBoxes.js";

/** Footer */
export default class Footer {
    constructor({ $target }) {
        const footer = document.createElement("footer");
        $target.append(footer);

        // 깃허브 링크
        const githubLink = `<a class="github-link" href="https://github.com/kimbareum/Ormi_Project1" target="_blank" aria-label="github 링크"><div></div></a>`;

        const pageDescription = makeTextBox({
            boxTag: "p",
            boxClass: "footer-text",
            text: `Copyright 2023. KimBareum. All rights reserved.`,
        });

        footer.innerHTML = githubLink;

        footer.append(pageDescription);
    }
}
