import { btnIntHang } from "../../Components/HangMan/hangMan"
import { cleanPg } from "../../Utils/utils";

export const textAc = "transatlantico";


export const pAcierto = (string) => {
    const writte = document.querySelector("#writte")
    const letterAcert = document.createElement("div")
    letterAcert.classList.add("boxLetter")
    for (let i = 0; i < string.length; i++) {
        const divAciertos = document.createElement("div")
        divAciertos.classList.add("divAciertos");
        divAciertos.innerHTML = `
        <span type=""text" class="acierto" id="span${i}">
        `
        letterAcert.appendChild(divAciertos)
        
    }
    writte.appendChild(letterAcert)
}



const flex = (box) => {
    box.style.display = "flex";
}

let j = 0;
let contador = 0;
let accWin = 0;

export const hangMan = (ev) => {
    
    const letra = ev.target.value.toLowerCase();

    document.querySelector("#textFallo").value = "";
    
    if (contador < textAc.length && textAc.includes(letra)){
        for (let i = 0; i < textAc.length; i++) {
            if(textAc[i] === letra) {
                console.log("Letra coincide" + contador)
                const loopsSpan = document.querySelectorAll("span");
                loopsSpan.forEach((item, x) => {
                    if(x == i){
                        accWin++;
                        item.innerText = letra;
                        if(accWin == textAc.length) {
                            alert("Acertaste 👏🏽")
                            cleanPg(app)
                            j = 0;
                            contador = 0;
                            accWin = 0;
                            btnIntHang()
                    }
                }
            })
        }
            }
         } else {
                const hombre = document.querySelectorAll(".hombre")
                hombre.forEach((item, y) => {
                    if(y == j) {
                       
                        item.style.display = "flex";
                    }
                })
                j++;
                if(j == 6) {
                    alert("Sorry, intentantolo otra vez")
                    cleanPg(app);
                    j = 0;
                    contador = 0;
                    accWin = 0;
                    btnIntHang();

                }
            }
            contador++;
            
        }
       
        

        

