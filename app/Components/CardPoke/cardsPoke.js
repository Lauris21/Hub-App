import { search } from "../../Utils/search"

export const cardsPoke = (list) => {
    const divCards = document.createElement("div")
    divCards.classList.add("divCards");
    list.forEach(item => {   
        divCards.innerHTML += `
        <figure data-number=${item.num} class="cardPoke ${item.type1}">
            <img src="${item.cover}" alt="${item.pokemon}" />
            <h3 class="h3details">${item.name}</h3>
            <p>Type: ${item.type1}</p>
             <div class="details">
                <p>Live: ${item.live}</p>
                <p>Atack: ${item.attack}</p>
                <p>Deff: ${item.deffense}</p>
            </div>   
        </figure>
        `
    });
        const app = document.querySelector("#app");
        app.appendChild(divCards);
   
};


    
export const eventoSearch = (list) => {
    const inputSearch = document.querySelector("#search");
    inputSearch.addEventListener("input", (ev) => search(list, ev.target.value))}  