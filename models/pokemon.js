/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

  let getAllStudents = (callback)=>{
      let query = 'SELECT * FROM students'

      dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
      })
  }

  let getIndividualStudent = (id, callback) => {

    let query = 'SELECT * FROM students WHERE id=$1 AND name=$2'
    let parameters = [
      id,
      'Arwa'
    ]

    dbPoolInstance.query(query,parameters,(err,result)=>{
      callback(err,result)
    })
  }

  return {
    getAll,
    getAllStudents,
    getIndividualStudent
  };
};
