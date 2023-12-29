export const CardAudioVisual = () => {
    return <button onClick={() => {
        fetch("https://images-api.nasa.gov/search?q=nazca")
            .then(response => response.json())
            // .then(data => console.log(data.collection.items))
            .then(data => console.log(data.collection.items))
            .catch(error => console.error(error))
    }}>
        Traer datos
    </button>
}