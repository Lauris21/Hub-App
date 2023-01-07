import "./styles.css"
import { getApi } from "../../Services/service"
import { cardsPoke, eventoSearch } from "../../Components/CardPoke/cardsPoke"
import { typeOption } from "../../Components/Nav/nav";
import { changeOption } from "../../Components/Nav/nav";



let listPoke;


const mapeoApi = (list) => {
    let pokemons = list.map((item) => {
        return {
        num: item.id,
        name: item.name,
        cover: item.sprites.front_default,
        type1: item.types[0].type.name,
        live: item.stats[0].base_stat,
        attack: item.stats[1].base_stat,
        deffense: item.stats[2].base_stat,
        }  

    })

    cardsPoke(pokemons);
    eventoSearch(pokemons);
    changeOption(pokemons);
}


const searchType = () => {
        let tipos = listPoke.map((item) => {
            return {
                typ: item.types[0].type.name,
            }
        })
        let t = []
        for (const item of tipos) {
         t.push(item.typ);
        }
    
        let tiposOfPok = [];

        for (let i = 0; i < t.length; i++) {
            if (!tiposOfPok.includes(t[i])) {
                tiposOfPok.push(t[i]);
            }
        }

            typeOption(tiposOfPok);
     }


const getPokeApi = async () => {
        let pokeApi = [];
        for (let i = 1; i < 152; i++) {
            pokeApi.push(await getApi(i));
        }
        listPoke = pokeApi;
        mapeoApi(listPoke);
        searchType(listPoke);
    
    }    
    
export const initAppi = () => {
        getPokeApi();
    }

