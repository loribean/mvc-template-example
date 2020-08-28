module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/', pokemonControllerCallbacks.index);

  app.get('/students', pokemonControllerCallbacks.students);

  app.get('/students/:id', pokemonControllerCallbacks.individualStudent)
};
