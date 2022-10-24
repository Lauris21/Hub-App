import { showName } from "../../Utils/user"

export const homeCmp = () => {
    const app = document.querySelector("#app");
    app.innerHTML = `
        <div class="boxWellcome">
            <h1>Wellcome ${showName()} 🎮</h1>
        </div>
        <div class="boxGames">
            <ul class="listGames">
                <li class="li1">
                    <button id="btnGames1" class="btnGames1 btnGames">
                        <h2 class="h2Games">3 en raya</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Tic_tac_toe.svg" alt="juego 3 en raya" />
                    </button>
                </li>
                <li class="li2">
                    <button id="btnGames2" class="btnGames2 btnGames">
                        <h2 class="h2Games">Memory Game</h2>
                        <img src="https://bananapanda.com/wp-content/uploads/2020/10/5902768336795_AV1.jpg" alt="juego memory game" />
                    </button>
                </li>
                <li class="li3">
                    <button id="btnGames3" class="btnGames3 btnGames">
                        <h2 class="h2Games">PokeAppi</h2>
                        <img src="https://pbs.twimg.com/profile_images/1229609721260232705/oT07arOT_400x400.jpg" alt="PokeAppi" />
                    </button>
                </li>
                <li class="li4">
                    <button id="btnGames4" class="btnGames4 btnGames">
                        <h2 class="h2Games">Whaka-Topo</h2>
                        <img src="https://scfredesignpro.wpenginepowered.com/wp-content/uploads/whackamole-900px.jpg" alt="juego Whaka-Topo" />
                    </button>
                </li>
                <li class="li5">
                    <button id="btnGames5" class="btnGames5 btnGames">
                        <h2 class="h2Games">Hang Man</h2>
                        <img src="https://i.pinimg.com/originals/d6/73/b4/d673b4e19a199a62386e5d716bcf6635.png" alt="juego Hang Man" />
                    </button>
                </li>
                <li class="li6">
                    <button id="btnGames6" class="btnGames6 btnGames">
                        <h2 class="h2Games">Quiz-Neo</h2>
                        <img src="https://happylearning.tv/wp-content/uploads/2017/07/quiz_seccion_portada-01-01-1.png" alt="juego Quiz-Neo" />
                    </button>
                </li>
            
            </ul>
        </div>
    `
}