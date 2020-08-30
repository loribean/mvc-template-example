module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  ===============================artistSongs==========
   */

  // require the controller
  const tunrControllerCallbacks = require('./controllers/tunrcontrol')(allModels);

  app.get('/', tunrControllerCallbacks.index);

  app.get('/artists', tunrControllerCallbacks.allArtists);

  app.get('/artists/:id', tunrControllerCallbacks.individualArtist);

  app.get('/artist/new',tunrControllerCallbacks.newArtist);

  app.post("/artist/added", tunrControllerCallbacks.createNewArtist);

  app.get('/artists/:id/edit', tunrControllerCallbacks.editArtist);

  app.put('/artists/:id', tunrControllerCallbacks.updateEditArtist);

  app.delete('/artists/:id',tunrControllerCallbacks.delDeleteArtist);

  app.get("/artists/:id/songs",tunrControllerCallbacks.artistSongs);

 app.post("/artists/:id/songs/added", tunrControllerCallbacks.createNewSong);

 app.get('/playlists/new',tunrControllerCallbacks.newPlaylist);

 app.post("/playlists/added", tunrControllerCallbacks.createNewPlaylist);


}