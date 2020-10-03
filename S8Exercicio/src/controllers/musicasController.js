const musicas = require("../models/musicas.json");

const getAllMusics = (req, res) => {
  res.status(200).send(musicas);
};

const getMusicByID = (req, res) => {
  const id = req.params.id;

  const musicaFiltrada = musicas.find((musica) => musica.id == id);

  res.status(200).send(musicaFiltrada);
};

const getAllArtists = (req, res) => {
  const artistas = musicas.map((musica) => musica.artista);

  res.status(200).send(artistas);
};

const getArtistByName = (req, res) => {
  const artista = req.params.nome;
  const musicasFiltradasPorArtista = musicas.filter(
    (musica) => musica.artista == artista
  );

  res.status(200).send(musicasFiltradasPorArtista);
};

const getAllAlbuns = (req, res) => {
  const albuns = musicas.map((musica) => musica.album);

  res.status(200).send(albuns);
};

const getAlbumByTitle = (req, res) => {
  const album = req.params.titulo;
  const musicasFiltradasPorAlbum = musicas.filter(
    (musica) => musica.album == album
  );

  res.status(200).send(musicasFiltradasPorAlbum);
};

const getMusicsSingle = (req, res) => {
  const musicasFiltradasPorSingle = musicas.filter(
    (musica) => musica.single === true
  );

  const artistaSingle = musicasFiltradasPorSingle.map((musica) => ({
    artista: musica.artista,
    titulo: musica.titulo,
  }));

  res.status(200).send(artistaSingle);
};

module.exports = {
  getAllMusics,
  getMusicByID,
  getAllArtists,
  getArtistByName,
  getAllAlbuns,
  getAlbumByTitle,
  getMusicsSingle,
};
