import "./styles.css"
import { cleanPg } from "../../Utils/utils";
import { initQuiz } from "../../Pages/Quiz/quiz";

const app = document.querySelector("#app")

export const btnInitQuiz = () => {
    const inicio = document.createElement("div")
    inicio.classList.add("paperGames");
    inicio.innerHTML = `
        <button id="iniQuiz" type="button" class="inicioGamess">Comenzar</button>
    `
    app.appendChild(inicio);
    //eventIniQuiz();

    const btnHomeVisi = document.querySelector("#btnHomee")
    btnHomeVisi.style.visibility = "initial";
    eventIniQuiz();
}

const eventIniQuiz = () => {
    const iniQuiz = document.querySelector("#iniQuiz");
    iniQuiz.addEventListener("click", (ev) => {cleanPg(app), initQuiz()})
}
