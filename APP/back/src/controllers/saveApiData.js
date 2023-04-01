const axios = require("axios");

const get100Char = async (req, res)=>{
try {

    const {data} = await axios.get("https://rickandmortyapi.com/api/character")
    const characters = data.results.slice(0, 100);
    const filteredCharacters = characters.map(
        ({ id, name, species, status, origin, gender, image }) => ({
            id,
            name,
            species,
            status,
            origin,
            gender,
            image,
    }));

    res.status(200).json(filteredCharacters);   

} catch (error) {
    res.status(500).json({message: error})
}

    


}
