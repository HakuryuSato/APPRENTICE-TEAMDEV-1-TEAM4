// 佐藤：コンフリクト対策のため、維持的に別ファイルに記述します！
// addEventListener.mjsでの作業完了後にこの記述を移動予定です！

import { fetchIjinText } from "./fetch_ijinText.mjs";

export function addEventListener_ijin() {


    // 1日の勉強を終えるボタンを押すと実行、1文字ずつテキストが表示される。
    document.addEventListener("DOMContentLoaded", () => { 
        // 偉人のテキストが入るid
        const ijinTextBox = document.getElementById("ijin-text");


        fetchIjinText().then((data) => {

            // データがなければデフォルトテキスト
            const text = data.message 
                ? data.message
                : "明日も前へ進み続けよう。困難を乗り越えるその姿勢が、偉大な歴史を紡いでいく力となる。";
            
            console.log(text)
            displayTextOneByOne(ijinTextBox, text);
        });

        function displayTextOneByOne(element, text, speed = 50) {
            let index = 0;
            element.textContent = ""; // 初期化

            const timer = setInterval(() => {
                element.textContent += text[index];
                index++;

                if (index >= text.length) {
                    clearInterval(timer);
                }
            }, speed);
        }
    });
}
