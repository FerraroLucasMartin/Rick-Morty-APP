let favs = require("../utils/favs.js");

const addFav = (req, res) => {
  const charObj = req.body;
  if (charObj && favs.push(charObj)) {
    res.status(200).json(charObj);
  } else {
    res.status(500).json({ error: "Error POST FAV" });
  }
};

const getFav = (req, res) => {
  if (favs) {
    res.status(200).json(favs);
  } else {
    res.status(500).json({ error: "Error GET FAVS" });
  }
};

const deleteFav = (req, res) => {
  const id = req.params.id;


  if (id > 0) {
    const index = favs.findIndex(
      (char) => char.id === id);
    favs.splice(index);
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ error: "Error DELETE FAV" });
  }
};

module.exports = { addFav, getFav, deleteFav };
