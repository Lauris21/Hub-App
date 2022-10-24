import "./styles.css"
import { cleanPg } from "../../Utils/utils"
import { hangMan, pAcierto, textAc } from "../../Pages/HangMan/hangEven";

 const app = document.querySelector("#app");
const tableroHang = () => {
    cleanPg(app)
    const tableroMan = document.createElement("div");
    tableroMan.classList.add("tableroMan")
    tableroMan.innerHTML = `
    <div class="man" id="man">
        <div class="headman hombre">
            <img src="../../assets/han.jpeg"
        </div>
        </div>
        <div class="bodyman">
            <div id=""lefth"" class="lefth hombre">
                <img src="../../assets/hannn.jpeg" alt="brazo muñeco" />
            </div>
            <div class="bodyh hombre">
                <img src="../../assets/bodyss.jpeg" alt="cuerpo muñeco" />
            </div>
            <div class="righth hombre">
                <img src="../../assets/braso.jpeg" alt="brazo muñeco" />
            </div>
        </div>
        <div class="leng">
            <div class="leftl hombre">
                <img src="../../assets/ll.jpeg" alt="pierna muñeco" />
            </div>
            <div class="leftr hombre">
                <img src="../../assets/rr.jpeg" alt="pierna muñeco" />
            </div>
        </div>
    </div>
    </div>
    <div class="writte" id="writte">
        <input autofocus required id="textFallo" type="text" class="inputFallo" maxlength="1"/>
    </div>
    `

    app.appendChild(tableroMan)

    const inputFallo = document.querySelector("#textFallo");
    inputFallo.addEventListener("input", (ev) =>  hangMan(ev))
    pAcierto(textAc);
}

export const btnIntHang = () => {
    const divHanginit = document.createElement("div")
    divHanginit.classList.add("paperGames")
    divHanginit.innerHTML = 
    `
        <button type="button" id="initH" class="inicioGamess">Start</button>
    `;
    app.appendChild(divHanginit);
    const initH = document.querySelector("#initH");

    initH.addEventListener("click", (ev) => tableroHang())


    const btnHomeVisi = document.querySelector("#btnHomee")
    btnHomeVisi.style.visibility = "initial";

}