import { cardsPoke } from "../Components/CardPoke/cardsPoke";
import { cleanPg } from "../Utils/utils";

export const search = (list, word) => {

    const filtered = list.filter((item) => item.name.toLowerCase().includes(word.toLowerCase()));
    cleanPg(app);
    cardsPoke(filtered);
} 