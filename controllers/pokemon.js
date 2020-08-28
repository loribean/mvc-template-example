module.exports = (db) => {

  /**
   * ===========================================
   * Controller Logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  let students = ((request,response)=>{
      
      // do database query and return the results
      db.pokemon.getAllStudents((err,result)=>{
        response.send(result.rows)
        // console.log(err,result);
      })
  })

  let individualStudent = (request,response) =>{
    let id=request.params.id
    db.pokemon.getIndividualStudent(id,(err,result)=>{
      if(err) {
        response.status(500).send("Oops we did not find the student you were looking for!!!")
      } else {
        response.send(result.rows)
      }
    })

  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    students,
    individualStudent
  };

}
