const express = require("express");
const router = express.Router();

const controller = require("../controllers/seriesController");

router.get("/", controller.getAllSeries);
router.get("/:id", controller.getSerieByID);

router.post("/", controller.postSerie);
router.post("/:id/season/:seasonId/episode", controller.postNewEpisodeSeason);
router.post("/:id/season", controller.postNewSeason);

router.put("/:id", controller.putSerie);

router.delete("/:id", controller.deleteSeries);
router.delete("/:id/season/:seasonId", controller.deleteSeason);
router.delete(
  "/:id/season/:seasonId/episode/:episodeId",
  controller.deleteEpisode
);

router.patch("/:id/liked", controller.patchSerie);
router.patch(
  "/:id/season/:seasonId/episode/:episodeId/watched",
  controller.patchEpisodeWatched
);

module.exports = router;
