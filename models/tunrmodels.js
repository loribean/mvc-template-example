/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getHome = (callback) => {
  };


  let getAllArtists= (callback) => {
    let query = 'SELECT * FROM artists ORDER BY name';
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)

    })
  }

  let getIndividualArtist = (id,callback) => {
    let query = `SELECT * FROM artists where id=${id}`;
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
  }

  let getNewArtist = (callback) => {
  };

  let postNewArtist = (values,callback) => {
    let query = 'INSERT INTO artists (name, photo_url, nationality) VALUES($1,$2,$3)' ;
    dbPoolInstance.query(query,values,(err,result)=>{
       callback(err,result)
    })
}

let getEditArtist = (id, callback) => {
    let query = `SELECT * FROM artists where id=${id}`;
    dbPoolInstance.query(query,(err,result)=>{
        callback(err,result)
    })
}

let putEditArtist = (values, callback) =>{
   let query = "UPDATE artists SET name=$1, photo_url=$2, nationality=$3 WHERE id=$4" ;
    dbPoolInstance.query(query,values,(err,result)=>{
       callback(err,result)
    })
}

let deleteArtist = (id, callback) =>{
    let query="DELETE from artists WHERE id=$1"
    dbPoolInstance.query(query,id,(err,result)=>{
        callback(err,result)
    })
}

let getArtistSongs = (id, callback) =>{
    let query = 'SELECT title,artist_id FROM songs where artist_id = $1'
    dbPoolInstance.query(query,id,(err,result) =>{
        callback(err,result)
    })
}

let postNewSong = (values,callback) => {
    let query = 'INSERT INTO songs(title,album,preview_link,artwork,artist_id) VALUES($1,$2,$3,$4,$5)' ;
    dbPoolInstance.query(query,values,(err,result)=>{
       callback(err,result)
    })
}

let postNewPlaylist = (callback) => {
    let query = 'INSERT INTO playlist (name) VALUES($1)'
    dbPoolInstance.query(query,values,(err,result)=>{
       callback(err,result)
    })
  };


  return {
    getHome:getHome,
    getAllArtists:getAllArtists,
    getIndividualArtist:getIndividualArtist,
    getNewArtist:getNewArtist,
    postNewArtist:postNewArtist,
    getEditArtist:getEditArtist,
    putEditArtist:putEditArtist,
    deleteArtist:deleteArtist,
    getArtistSongs:getArtistSongs,
    postNewSong:postNewSong,
    postNewPlaylist:postNewPlaylist

  };
};