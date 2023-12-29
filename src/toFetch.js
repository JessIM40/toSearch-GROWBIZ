// -------------- Obtener datos de la API------------
async function useFetch(state) { 
    const response = await fetch("https://images-api.nasa.gov/search?q=nazca");
    const data = await response.json();
    // console.log(data.collection.items)
    state(data.collection.items);
}

export default useFetch
