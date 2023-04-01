const axios = require("axios");
const URL= "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) =>{
  const params= req.params;

try {
  const {data} = await axios.get(`${URL}${params.id}`)
  const char = {
          id: data.id,
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
          status: data.status,
          origin: data.origin,
        };
  res.status(200).json(char);
} catch (error) {
  res.status(500).json({ message: error });
}
//   axios.get(`${URL}${params.id}`)
//   .then(({data})=>{

//     const char = {
//       id: data.id,
//       image: data.image,
//       name: data.name,
//       gender: data.gender,
//       species: data.species,
//       status: data.status,
//       origin: data.origin,
//     };
  
//   res.status(200).json(char);
// })
// .catch((err) => {
//   res.status(500).json({ message: err });
// });



};


module.exports = {getCharDetail};
