export const getApi = async (id) => {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const dataJson = await data.json();
        return dataJson
    } catch (error) {
        console.log(error)
    } 
}
