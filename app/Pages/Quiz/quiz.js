import "./styles.css"
import { cleanPg } from "../../Utils/utils";
import { btnInitQuiz } from "../../Components/CardQuiz/cardQuiz";

export const initQuiz = async () => {
    await getTrivial();
}


let destructur = [];

const getTrivial = async() => {
    const data = await fetch(`http://localhost:8080/trivial`);
    const dataJson = await data.json();
    mapeoQuiz(dataJson);

}



const mapeoQuiz = (list) => {
    const mapeo = list.map((item, i) => {
        return {
            preg: item.answer,
            respuestas: item.respuestas,
            correcta: item.correcta,
            id: i
        }
    })
        
        
    destructur = mapeo;
    //destructur.respuestas.sort(function() { return Math.random() - 0.5 })
    templateQues(mapeo)

}



const templateQues = (list) => {   
    
    const carta = document.createElement("div")
    const app = document.querySelector("#app");
    const template = document.createElement("div")
    
    list.forEach((item ,i) => {
        template.innerHTML += `
        <div id="boxQues${i}" class="boxQuestions boxQues${i}">

            <h3>${item.preg}</h3>
            <section class="questions">
                    <button id="${item.respuestas[1]}" class="radio" type="button" value="${item.respuestas[1]}">${item.respuestas[1]}</button>

                    <button id="${item.respuestas[0]}" class="radio" type="button" value="${item.respuestas[0]}">${item.respuestas[0]}</button>
    
                    <button id="${item.respuestas[2]}" class="radio" type="button" value="${item.respuestas[2]}">${item.respuestas[2]}</button>

                    <button id="${item.respuestas[3]}" class="radio" type="button" value="${item.respuestas[3]}">${item.respuestas[3]}</button>
        
            </section>
        </div>
    `    })
       


        carta.appendChild(template)
        app.appendChild(carta)

        eventQuiz()
    
}


const eventQuiz = () => {

    const preg0 = document.querySelector("#boxQues0");
    const preg1 = document.querySelector("#boxQues1");
    const preg2 = document.querySelector("#boxQues2")
    const preg3 = document.querySelector("#boxQues3")
    const preg4 = document.querySelector("#boxQues4")
    const preg5 = document.querySelector("#boxQues5")

    let preguntas = [];
    let correctas = [];

    for (const item of destructur) {
        correctas.push(item.correcta); 
    }

    const option = (event) => {
    
        if(correctas.includes(event.value)){
            event.style.background =  "#9fff9f";
            console.log(event)
            alert("Ole que ole los girasoles 🌻");
            switch (event.value) {
                case "Everest":
                    nextCard(preg0, preg1)
                    break;
                case "Amazonas":
                    nextCard(preg1, preg2)
                    break;
                case "Mamba Negra":
                    nextCard(preg2, preg3)
                    break;
                case "79":
                    nextCard(preg3, preg4)
                    break;
                case "Rana Dardo Dorada":
                    nextCard(preg4, preg5)
                    break;
                case "Murciélago Abeja":
                    cleanPg(app)
                      btnInitQuiz();
                    break;

                default:
                    break;
            }

                

                } else {
                    alert("oooooooohh tal vez la próxima...");
                        switch (event.value) {
                            case "Teide": 
                            case "Monte K2":
                            case "Mont Blanc":
                                nextCard(preg0, preg1)
                                break;
                            case "Nilo":
                            case "Misisipi":
                            case  "Tajo":
                                nextCard(preg1, preg2)
                                break;
                            case "Cobra Real": "Mamba Negra"
                            case "Vívora":
                            case "Cobra Filipina":    
                            nextCard(preg2, preg3)
                                break;
                            case "53":
                            case "91":
                            case "38":
                                nextCard(preg3, preg4)
                                break;
                            case "Tiburón":
                            case "Hipopotamo":
                            case "Pez Globo":
                                nextCard(preg4, preg5)
                                break;
                            case "Musaraña":
                            case "Jerbo Pigmeo":
                            case "Ratón de campo":
                               cleanPg(app)
                                btnInitQuiz();
                                break;
                            default:
                                break;
                        }
                }
            }

    const btnNext = document.querySelectorAll(".radio")
    for (const item of btnNext) {
                item.addEventListener("click", (event) => option(event.target))
            }

            
        
    }

    const nextCard = (box, box1) => {
        box.style.display = "none";
        box1.style.display = "block";


    }
        


