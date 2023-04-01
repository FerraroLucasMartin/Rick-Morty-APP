const {UserModel} = require ("../DB_connection.js")

export async function postUser(req, res){
const{email, password}= req.body;
try {
    if(!email||!password) throw Error("Faltan datos");
    const{user, created} = await UserModel.findOrCreate({where: {email, password}})
    res.status(200).json(user);
} catch (error) {
    res.status(400).json({message: error.message})
}
}
