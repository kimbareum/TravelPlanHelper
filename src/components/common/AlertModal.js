import { makeBox } from "./commonBoxes.js";
import { Button } from "./Button.js";

/** alert용도로 사용될 modal을 생성하고, 텍스트변경, 표기, 숨김 메서드를 제공한다. */
export class AlertModal {
    /**
     * alert용도로 사용될 modal을 생성하고, 텍스트변경, 표기, 숨김 메서드를 제공한다.
     * @param {Object} option 모달의 위치와 모달 내부 메세지
     * @param {HTMLElement} option.$target 모달이 삽입될 위치
     * @param {string} option.text 모달의 내부 메세지
     */
    constructor({ $target, text = "" }) {
        this.alertScreen = makeBox({
            boxTag: "div",
            boxClass: "alert-screen",
        });
        $target.append(this.alertScreen);

        this.alertBox = makeBox({
            boxTag: "div",
            boxClass: "alert-box",
        });
        this.alertScreen.append(this.alertBox);

        this.alertDescription = makeBox({
            boxTag: "p",
            boxClass: "alert-description",
        });
        this.alertBox.append(this.alertDescription);

        this.alertButton = new Button({
            $target: this.alertBox,
            type: "button",
            className: "alert-button",
            HTML: "확인",
        });

        if (text) {
            this.setDescription(text);
        }

        this.setEvent();
    }

    setEvent() {
        // 박스 외부나 버튼 클릭시 => alert hide() (alert창 숨김)
        this.alertScreen.addEventListener("click", (e) => {
            if (
                e.target !== this.alertBox &&
                e.target !== this.alertDescription
            ) {
                this.hide();
            }
        });
    }
    /**
     * alertModal의 innerText를 변경한다.
     * @param {string} text 변경할 innerText
     */
    setDescription(text) {
        this.alertDescription.innerText = text;
    }
    /** alertModal을 표시한다. */
    show = () => {
        this.alertScreen.classList.add("show");
    };
    /** alertModal을 숨긴다. */
    hide = () => {
        this.alertScreen.classList.remove("show");
    };
}
