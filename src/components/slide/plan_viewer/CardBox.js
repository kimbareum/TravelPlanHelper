import { makeBox, makeTextBox } from "../../common/commonBoxes.js";

/** PlanBox의 하위 컴포넌트로 카드 한장한장의 생성을 담당한다. */
export class CardBox {
    constructor({ $planBox }) {
        // card box 생성
        this.cardBox = makeBox({
            boxTag: "div",
            boxClass: "card-box",
        });
        $planBox.append(this.cardBox);
    }

    render() {
        // card box의 내용을 비워서 렌더링 준비.
        this.cardBox.innerHTML = "";

        // 응답의 내용을 저장.
        const plans = JSON.parse(localStorage.getItem("plans"));
        for (const idx in plans) {
            // 일차마다 card를 한장씩 생성
            const card = this.makeCard(plans[idx]);
            this.cardBox.append(card);
        }
    }

    /** 박스를 초기화한다. */
    clear() {
        this.cardBox.innerHTML = `<div style="padding: 300px 0 300px 0"> 여행계획이 아직 생성되지 않았습니다.</div>`;
    }

    /** 여행계획 카드 1장을 생성한다. */
    makeCard(data) {
        if (data) {
            // card 한장의 box 생성.
            const card = makeBox({
                boxTag: "div",
                boxClass: "card",
            });

            // card의 제목 box 생성.
            const labelBox = makeBox({
                boxTag: "div",
                boxClass: "card-label-row",
            });
            // card의 제목 추가.
            const label = makeTextBox({
                boxTag: "div",
                boxClass: "card-label",
                text: data["날짜"],
            });
            labelBox.append(label);

            // card의 세부일정 박스 생성.
            const detailBox = makeBox({
                boxTag: "ul",
                boxClass: "card-detail",
            });

            for (const plan of data["일정"]) {
                // 세부일정을 시간과 일정내용으로 분리
                const splitData = plan.split(":");

                // card의 각 row를 생성
                const row = makeBox({
                    boxTag: "li",
                    boxClass: "card-row",
                });
                // card row에 시간 column 생성
                const colTime = makeTextBox({
                    boxTag: "div",
                    boxClass: "time",
                    text: splitData[0].trim(),
                });
                // card row에 일정 column 생성
                const colDetail = makeTextBox({
                    boxTag: "div",
                    boxClass: "detail",
                    text: splitData[1].trim(),
                });

                row.append(colTime, colDetail);
                detailBox.append(row);
            }

            card.append(labelBox, detailBox);
            return card;
        }
    }
}
