import './styles.css'
import { cleanPg } from '../../Utils/utils';
import { Home } from '../Home/home';


export const Login = () => {
    const app = document.querySelector("#app");
    app.innerHTML = `
    <div id="loginBox" class="loginClass">
        <h1 class="h1Login">NEOLAND HUB-GAMES</h1>
        <h3 class="h3Login">Introduce tu nombre</h3>
        <input autofocus required id="inputLogin" class="inputLogin" type="text" placeholder="Name"  >
        <button id="btnLogin" class="btnLogin" type="submit">👌</button>
    </div>
    `
    const btn = document.querySelector("#btnLogin");
    const input = document.querySelector("#inputLogin");

    /*input.addEventListener("keydown", (event) => enter());

    const enter = () => {
        if(event.keyCode == "13") {
            user(input.value);
        }*/
    btn.addEventListener("click", () => user(input.value));
    }

const user = (value) => {
    localStorage.setItem("user", value);
    cleanPg(app);
    Home();
}