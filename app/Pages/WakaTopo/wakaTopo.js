import { btnInitTopo } from "../../Components/Topo/topo";
import { cleanPg } from "../../Utils/utils";

let lastHole;
let timeEnd = false;
let score = 0;


const timeRandom = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
}

const tiempoMuestra = () => {
    const allHole = document.querySelectorAll(".hole")
    const i = Math.floor(Math.random() * allHole.length);
    const holeRandom = allHole[i];
    if(holeRandom === lastHole){
        tiempoMuestra(allHole);
    }
    lastHole = holeRandom;
    return holeRandom;
}

const timeHello = () => {
    const randomTime = timeRandom(300, 1300);
    const allHole = document.querySelectorAll(".hole")
    const hole = tiempoMuestra(allHole)
    hole.classList.add("hello")

    setTimeout(() => {
        hole.classList.remove("hello")
        if(!timeEnd){
            timeHello()
        }
    }, randomTime)
}

const app = document.querySelector("#app");

const end = () => {
    cleanPg(app)
    const endDiv = document.createElement("div");
    endDiv.classList.add("endDiv");
    app.appendChild(endDiv)
    endDiv.textContent = `Puntuacion: ${score}`
}

export const goo = () => {
    let timeEnd = false;
    let score = 0;
    timeHello()
    setTimeout(() => (timeEnd = true), 20000)
    setTimeout(() => {
        end()
    }, 20000)
    setTimeout(() => {
        btnInitTopo()
    }, 22500)
}

export const cazado = (event) => {
    score += 100;
    event.target.parentNode.classList.remove("hello")
    const scoreDiv = document.querySelector(".score")
    scoreDiv.textContent = score;
}

