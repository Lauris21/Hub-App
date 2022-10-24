import { tablero } from "../../Components/tresRaya/tresRaya";
import { cleanPg } from "../../Utils/utils";




let btnTotal = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let turno = 0;
let par = [];
let impar = [];

const app = document.querySelector("#app");

export const eventIniTresRaya= () => {
    cleanPg(app);
    const divInitTres = document.createElement("div");
    divInitTres.classList.add("paperGames")
        divInitTres.innerHTML = 
        `
            <button type="button" id="initTres" class="inicioGamess">Start</button>
        `;
        app.appendChild(divInitTres);


        const initTres = document.querySelector("#initTres");
        initTres.addEventListener("click", (ev) => tablero())
    
        const btnHomeVisi = document.querySelector("#btnHomee")
        btnHomeVisi.style.visibility = "initial";
    

   
}

export const btnPlay = () => {
    
    const btnGrill = document.querySelectorAll(".f");
    btnGrill.forEach((element, i)=> {
        element.value = Number(i);
        element.addEventListener("click", (event) => clickTurno(event.target, i));
        btnTotal = [0, 1, 2, 3, 4, 5, 6, 7, 8];
         turno = 0;
        par = [];
        impar = [];
    });
    
}
const positionGanador = [[0,1,2],[2,5,8],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6], [3,4,5]];

const clickTurno = (event) => {
    console.log(turno)
    if((turno < 10 && event.innerHTML == "" )|| turno == 0){
            let restar = btnTotal.indexOf(Number(event.value));
            btnTotal.splice(restar, 1)
            event.innerHTML = "O";
            event.style.background = "rgb(222, 251, 167)";
            turno++;
            par.push(Number(event.value));
            if(par.length >= 3) {
                positionGanador.forEach((item) => {
                    let acc = 0;
                   item.forEach((i) => {
                        if(par.includes(i)){
                            acc++;
                            if(acc == 3){
                                alert("Win player 1")
                    
                                eventIniTresRaya()
                                
                            }
                        }
                    })
                })
        }
            cpu();
    
    } else if (turno >= 10){
        alert("Empate")
        eventIniTresRaya() }
}

const cpu = () => {
    
    const btnCpu = document.querySelectorAll(".f");
    let nRandom = Math.trunc(Math.random() * (btnCpu.length - 1) + 1)
    if(btnCpu[nRandom].innerHTML == ""){
        console.log(btnCpu[nRandom].innerHTML == "")
        turno++;
        btnCpu[nRandom].innerHTML = "X";
        btnCpu[nRandom].style.background = "rgb(251, 238, 197)";
        btnTotal.splice(nRandom,1);
        console.log("tablero despues CP" + btnTotal)
        impar.push(nRandom);
        console.log(impar)
            if(impar.length >= 3) {
                positionGanador.forEach((item) => {
                    let acc = 0;
                    item.forEach((i) => {
                    if(impar.includes(i)){
                        acc++;
                        if(acc == 3){
                            alert("Win CPU")
                            eventIniTresRaya()
                
                        }
                    }
                })
            })
        }
    } else {
        cpu();
    }
}
