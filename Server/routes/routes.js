const PartygoerController = require("../controllers/controller");

module.exports = (app) => {
  app.get("/", PartygoerController.Indexs);
};