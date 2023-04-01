require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("./models/favoritesfavorites")
const UserModel = require ("./models/user.js")

/*
EJERCICIO 0
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
UserModel(sequelize);
FavoriteModel(sequelize);

UserModel.belongsToMany(FavoriteModel);
FavoriteModel.BelongsToMany(UserModel, {through: "user_favorite"})




module.exports = {
   ...sequelize.models,
   sequelize,
   UserModel,
   FavoriteModel,
};
