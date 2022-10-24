import "./styles.css"
import { cleanPg } from "../../Utils/utils";
import { btnHome } from "../../Utils/btnInit";
import { cardsPoke } from "../CardPoke/cardsPoke";

export const nav = () => {
    cleanPg(header);
    const nav = document.querySelector("#header");
    nav.innerHTML = `
        <nav id="navPoke" class="navPoke">
            <img src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="logo Pokemon" />
            <button id="buttonHome" class="btnReturn"></button>
            <div class='search-cont'>
                <input id="search" type="search" placeholder="Search" >
                <button id="buttonSearch" type="button"> 🔎</button>
            </div>
            <select id="filter" class="filter">
                <option value="">Type</option>
            </select> 
        </nav>
        `
    const btnReturn = document.querySelector("#buttonHome");
    btnReturn.addEventListener("click", (ev) => btnHome());
 
}
export const typeOption = (list) => {
    const filter = document.querySelector("#filter")
     for (let item of list){
        const option = document.createElement("option");
        option.value = item;
        option.innerText = item;
        filter.appendChild(option);
    }; 
   
    };


const filterType = (list, word) => {
        const section = list.filter((item) => item.type1 == word);
        cleanPg(app);
        cardsPoke(section);
        console.log(section)

}



export const changeOption = (list) => {
    const filter = document.querySelector("#filter")
    const option = document.querySelectorAll("option").value;
    filter.addEventListener("change", (e) => filterType(list, e.target.value))
    
}

    

    