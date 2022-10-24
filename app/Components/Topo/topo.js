import "./styles.css"
import { cleanPg } from "../../Utils/utils";
import { cazado } from "../../Pages/WakaTopo/wakaTopo";
import { goo } from "../../Pages/WakaTopo/wakaTopo";

const app = document.querySelector("#app");

let intervalo;
let segundos = 3;

const interval = () => {
    intervalo = setInterval(() => {
        printcount();
    }, 1000);
}

const printcount = () => {
    const cuentaAtras = document.querySelector(".divCuentaAtras")
    const pCuenta = document.createElement("p");
    pCuenta.classList.add("pCuenta")
    cuentaAtras.appendChild(pCuenta)
    pCuenta.innerText += `${segundos}`
    segundos--;
    if(segundos < 0 ){
        clearInterval(intervalo);
        cleanPg(app)
        wakaTopo()
        
    }
}

const countDown = () => {
    cleanPg(app);
    let segundos = 3;
    const cuentaAtras = document.createElement("div");
    cuentaAtras.classList.add("divCuentaAtras");
    app.appendChild(cuentaAtras);
    interval()
    
}

const wakaTopo = () => {
    cleanPg(app)
    const divTableroTopo = document.createElement("div");
    divTableroTopo.classList.add("tableroTopo");
    app.appendChild(divTableroTopo);
    divTableroTopo.innerHTML = `
        <div class="boxScore">
        <span class="score">0</span>
        </div>
        <div class="holesTopos">
            <div class="hole hole1">
                <div class="topin"></div>
            </div>
            <div class="hole hole2">
                <div class="topin"></div>
            </div>
            <div class="hole hole3">
                <div class="topin"></div>
            </div>
            <div class="hole hole4">
                <div class="topin"></div>
            </div>
            <div class="hole hole5">
                <div class="topin"></div>
            </div>
            <div class="hole hole6">
                <div class="topin"></div>
            </div>
            <div class="hole hole7">
                <div class="topin"></div>
            </div>
            <div class="hole hole8">
                <div class="topin"></div>
            </div>
        </div>
    `;

    const topins = document.querySelectorAll(".topin");
    topins.forEach((item) => {
        item.addEventListener("click", (ev) => cazado(ev))
    })
    goo();
    
}

export const btnInitTopo = () => {
    cleanPg(app)
    const divInitTopo = document.createElement("div");
    divInitTopo.classList.add("paperGames")
    divInitTopo.innerHTML = 
        `
            <button type="button" id="divInitTopo" class="inicioGamess">Start</button>
        `;
        app.appendChild(divInitTopo);


        const btnITopo = document.querySelector("#divInitTopo");
        btnITopo.addEventListener("click", (ev) => countDown())
    
        const btnHomeVisi = document.querySelector("#btnHomee")
        btnHomeVisi.style.visibility = "initial";
   
}

