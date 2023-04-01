const {FavoriteModel} = require ("../DB_connection.js")

export async function postFav(req, res){
const{name,origin,status,image,species,gender}= req.body;
try {
    if(!name||!origin||!status||!image||!species||!gender) res.status(400).json({message: "Faltan datos"});
    const{fav, created} = await UserModel.findOrCreate({where: {name,origin,status,image,species,gender}})
    res.status(200).json(fav);
} catch (error) {
    res.status(400).json({message: error.message})
}
}
