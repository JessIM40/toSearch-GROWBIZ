import { FiSearch } from "react-icons/fi"
function Searcher() {

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
        <input type="text" onChange={handleChange}/>
        <FiSearch/>


        </>
    )
    
}

export default Searcher