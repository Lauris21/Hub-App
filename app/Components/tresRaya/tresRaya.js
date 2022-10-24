import "./styles.css"
import { btnPlay } from "../../Pages/TresRaya/playRaya"
import { cleanPg } from "../../Utils/utils";

const app = document.querySelector("#app");

export const tablero = () => {
    cleanPg(app);
    const tableroDiv = document.createElement("div");
    tableroDiv.classList.add("contRaya")
    tableroDiv.innerHTML = `
        <h3 class="tituloRaya">Juego Tres en Raya</h3>
        <h4 class="textoFin">Winner</h4>
        <div class="boxRaya">
            <button class="f"></button>
            <button class="f"></button>
            <button class="f"></button>
            <button class="f"></button>
            <button class="f"></button>
            <button class="f"></button>
            <button class="f"></button>
            <button class="f"></button>
            <button class="f"></button>
        </div>
    `
    
    app.appendChild(tableroDiv);

    btnPlay();

}



