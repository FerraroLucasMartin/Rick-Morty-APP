const express = require("express");
const server = express();
const {sequelize} = require("./DB_connection")

const PORT = 3001;

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};
server.use(cors(corsOptions));

const charRouter = require("./routes/index.js");
const { sequelize } = require("./DB_connection.js");

server.use(express.json());
server.use("/", charRouter)

//seq.sync(f:true).then(server.listen)

async function main(){
  await sequelize.sync({force:true})
  server.listen(PORT, () => {

  console.log('Server raised in port ' + PORT);
});
}

main();


