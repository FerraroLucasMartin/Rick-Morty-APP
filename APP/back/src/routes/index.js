const {Router} = require ("express")

const {getCharById} = require("../controllers/getCharById.js")
const{ getCharDetail} = require ("../controllers/getCharDetail.js")
const {addFav} = require("../controllers/favController.js")
const {deleteFav} = require("../controllers/favController.js")
const {getFav} = require("../controllers/favController.js")

const charRouter = Router();


charRouter.get("/onsearch/:id", getCharById)
charRouter.get("/detail/:id", getCharDetail)

charRouter.post("/fav", addFav)
charRouter.get("/fav", getFav)
charRouter.delete("/fav/:id", deleteFav)

module.exports = charRouter;
