const express = require("express");
const route = express.Router();
const controller = require("../controllers/musicasController");

route.get("/musicas", controller.getAllMusics);
route.get("/musica/:id", controller.getMusicByID);

route.get("/artistas", controller.getAllArtists);
route.get("/artista/:nome", controller.getArtistByName);

route.get("/albuns", controller.getAllAlbuns);
route.get("/albuns/:titulo", controller.getAlbumByTitle);

route.get("/musicas/single", controller.getMusicsSingle);

module.exports = route;
