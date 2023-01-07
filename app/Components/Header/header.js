import { btnHome } from "../../Utils/btnInit";

    const btnEvent = () => {
        let options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let random = [];
        for (let i = 0; i < 6; i++) {
            random.push(options[Math.floor(Math.random() * options.length)]);
        }
        const color = `#${random.join("")}`;
        document.body.style.background = color;
        const btn = document.querySelector("#btnChange");
        btn.style.background = color;
        
    };

    export const Header = () => {
        const header = document.querySelector("#header");
        header.innerHTML = `
            <button id="btnHomee" class="btnReturn"></button>
            <button id="btnChange" class="btnChange" type="button">🔘 Change Color</button>
            `
        const btn = document.querySelector("#btnChange");
        btn.addEventListener("click", (ev) => btnEvent());
    
        const btnReturn = document.querySelector("#btnHomee");
        btnReturn.classList.add("btnReturn")
        btnReturn.style.visibility = "hidden";
        btnReturn.addEventListener("click", (ev) => btnHome());
    };
