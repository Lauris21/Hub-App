import { cleanPg } from "./utils";
import { Home } from "../Pages/Home/home";
import { Header } from "../Components/Header/header";
import { initAppi } from "../Pages/PokeApi/pokeapi"
import { nav } from "../Components/Nav/nav";
import { btnInitQuiz } from "../Components/CardQuiz/cardQuiz";
import { btnIntHang } from "../Components/HangMan/hangMan";
import { eventIniTresRaya } from "../Pages/TresRaya/playRaya";
import { btnInitTopo } from "../Components/Topo/topo";


const app = document.querySelector("#app");
const header = document.querySelector("#header")

export const btnHome = () => {
    cleanPg(header);
    cleanPg(app);
    Header();
    Home();
}


export const btnPkemon = () => {
    const btn3 = document.querySelector("#btnGames3")
    btn3.addEventListener("click", () => appi());
}
const appi = () => {
    cleanPg(app);
    nav();
    initAppi();
}


export const btnQuiz = () => {
    const btn6 = document.querySelector("#btnGames6")
    btn6.addEventListener("click", () => quizGame());
};
const quizGame = () => {
    cleanPg(app);
    btnInitQuiz();
}


export const btnRaya = () => {
    const btn1 = document.querySelector("#btnGames1");
    btn1.addEventListener("click", () => init3Raya());

};
const init3Raya = () => {
    cleanPg(app);
    eventIniTresRaya()
}

export const btnHang = () => {
    const btnMan = document.querySelector("#btnGames5");
    btnMan.addEventListener("click", () => initHang())
}
const initHang = () => {
    cleanPg(app);
    btnIntHang();

}

export const btnTopo = () => {
    const btn4 = document.querySelector("#btnGames4")
    btn4.addEventListener("click", () => iniTopoGame());
};
const iniTopoGame = () => {
    cleanPg(app);
    btnInitTopo();
}






