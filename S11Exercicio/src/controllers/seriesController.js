const series = require("../models/series.json");
const fs = require("fs");

const writeFiles = () => {
  return fs.writeFile(
    "./src/models/series.json",
    JSON.stringify(series),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("File updated successfully!");
    }
  );
};

const getAllSeries = (req, res) => {
  res.status(200).send(series);
};

const getSerieByID = (req, res) => {
  const id = req.params.id;

  const filterSerie = series.find((serie) => serie.id == id);

  if (!filterSerie)
    return res.status(400).send({
      error: "Serie not found",
    });

  res.status(200).send(filterSerie);
};

const postSerie = (req, res) => {
  const { id, name, genre, synopsis, liked, seasons } = req.body;

  series.push({
    id,
    name,
    genre,
    synopsis,
    liked,
    seasons,
  });

  writeFiles();

  res.status(201).send(series);
};

const postNewEpisodeSeason = (req, res) => {
  const serieId = req.params.id;
  const serie = series.find((serie) => String(serie.id) === serieId);

  if (!serie)
    return res.status(400).send({
      error: "Serie not found",
    });

  const seasonId = req.params.seasonId;
  const filteredSeason = serie.seasons.find(
    (season) => String(season.id) === seasonId
  );

  if (!filteredSeason)
    return res.status(400).send({
      error: "Season not found",
    });

  const { id, code, name, watched } = req.body;

  filteredSeason.episodes.push({
    id,
    code,
    name,
    watched,
  });

  writeFiles();

  const serieName = serie.name;
  const seasonEps = filteredSeason.episodes;

  res.status(201).send([serieName, seasonEps]);
};

const postNewSeason = (req, res) => {
  const serieId = req.params.id;
  const filterSerie = series.find((serie) => serie.id == serieId);

  if (!filterSerie)
    return res.status(400).send({
      error: "Serie not found",
    });

  const { id, code, episodes } = req.body;

  filterSerie.seasons.push({
    id,
    code,
    episodes,
  });

  writeFiles();

  res.status(201).send(filterSerie);
};

const putSerie = (req, res) => {
  try {
    const id = req.params.id;
    const updatedSerie = req.body;

    const modifiedSerie = series.find((serie) => serie.id == id);

    const index = series.indexOf(modifiedSerie);

    series.splice(index, 1, updatedSerie);
    console.log(series);

    writeFiles();

    res.status(200).send(series);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

const deleteSeries = (req, res) => {
  const id = req.params.id;
  const filterSeries = series.find((serie) => serie.id == id);

  if (!filterSeries)
    return res.status(400).send({
      error: "Serie not found",
    });

  const index = series.indexOf(filterSeries);
  series.splice(index, 1);

  writeFiles();

  res.status(200).send(series);
};

const deleteSeason = (req, res) => {
  const serieId = req.params.id;
  const serie = series.find((serie) => String(serie.id) === serieId);

  if (!serie)
    return res.status(400).send({
      error: "Serie not found",
    });

  const seasonId = req.params.seasonId;
  const foundIndexSeason = serie.seasons.findIndex(
    (season) => String(season.id) === seasonId
  );

  if (!foundIndexSeason)
    return res.status(400).send({
      error: "Season not found",
    });

  serie.seasons.splice(foundIndexSeason, 1);

  writeFiles();

  res.status(200).send(serie);
};

const deleteEpisode = (req, res) => {
  const serieId = req.params.id;
  const serie = series.find((serie) => String(serie.id) == serieId);

  if (!serie)
    return res.status(400).send({
      error: "Serie not found",
    });

  const seasonId = req.params.seasonId;
  const foundIndexSeason = serie.seasons.find(
    (season) => String(season.id) == seasonId
  );

  if (!foundIndexSeason)
    return res.status(400).send({
      error: "Season not found",
    });

  const index = series.indexOf(foundIndexSeason);
  foundIndexSeason.episodes.splice(index, 1);

  writeFiles();

  res.status(200).send(serie);
};

const patchSerie = (req, res) => {
  try {
    const id = req.params.id;
    const updated = req.body;

    const modifiedSerie = series.find((serie) => serie.id == id);

    Object.keys(updated).forEach((key) => (modifiedSerie[key] = updated[key]));

    writeFiles();

    const updatedLiked = modifiedSerie.liked;

    // console.log(modifiedSerie.liked);

    res.status(200).send(updatedLiked);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

const patchEpisodeWatched = (req, res) => {
  const updated = req.body;

  const serieId = req.params.id;
  const serie = series.find((serie) => String(serie.id) == serieId);

  if (!serie)
    return res.status(400).send({
      error: "Serie not found",
    });

  const seasonId = req.params.seasonId;
  const foundIndexSeason = serie.seasons.find(
    (season) => String(season.id) == seasonId
  );

  if (!foundIndexSeason)
    return res.status(400).send({
      error: "Season not found",
    });

  const episodeId = req.params.episodeId;
  const modifiedEpisode = foundIndexSeason.episodes.find(
    (ep) => String(ep.id) == episodeId
  );

  if (!modifiedEpisode)
    return res.status(400).send({
      error: "Episode not found",
    });

  Object.keys(updated).forEach((key) => (modifiedEpisode[key] = updated[key]));

  writeFiles();

  const updatedWatched = modifiedEpisode.watched;

  res.status(200).send(updatedWatched);
};

module.exports = {
  getAllSeries,
  getSerieByID,
  postSerie,
  postNewEpisodeSeason,
  postNewSeason,
  putSerie,
  deleteSeries,
  deleteSeason,
  deleteEpisode,
  patchSerie,
  patchEpisodeWatched,
};
