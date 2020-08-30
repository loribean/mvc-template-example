module.exports = (db) => {

  /**
   * ===========================================
   * Controller Logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      response.render('tunr/index')
  };


  let allArtists = (request,response)=>{
      db.tunr.getAllArtists((err,result)=>{
        if(err){
            response.send('Error at getAllArtists')
        } else{
            response.render('tunr/artists',result)
            console.log(result)
        }
        })
  }


  let individualArtist = (request,response) =>{
    let id=request.params.id
    db.tunr.getIndividualArtist(id,(err,result)=>{
      if(err) {
        response.status(500).send("Oops we did not find the artist you were looking for!!!")
      } else {
        console.log(result)
        response.render('tunr/indivartist',result)
      }
    })

  }

  let newArtist = (request, response) => {
      response.render('tunr/form')
  };

let createNewArtist =(request,response)=>{
    console.log(request.body);
    let values =[request.body.name,request.body.photo,request.body.nationality];
      db.tunr.postNewArtist(values,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            response.send("Artist Created! <a href ='/''> Back to home</a>")
        }
      })
  }

  let editArtist = (request,response) => {
    let id = request.params.id
    db.tunr.getEditArtist(id,(err,result)=>{
      if(err) {
        response.status(500).send("Oops we did not find the artist you were to edit!!!")
      } else {
        console.log(result)
        response.render('tunr/edit',result.rows[0])
      }
    })
  }


let updateEditArtist = (request,response)=>{
    console.log(request.body);
    let id = request.params.id;
    let values =[request.body.name,request.body.photo,request.body.nationality,id];
      db.tunr.putEditArtist(values,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            response.send("Artist Updated! <a href ='/''> Back to home</a>")
        }
      })
  }

let delDeleteArtist = (request,response)=>{
    console.log(request.body);
    let id = [request.params.id];
      db.tunr.deleteArtist(id,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            response.send("Artist Deleted! <a href ='/''> Back to home</a>")
        }
      })
  }

  let artistSongs =(request,response) =>{
    let id = [request.params.id];
      db.tunr.getArtistSongs(id,(err,res)=>{
        if(err){
            console.log(err)
        }else {
            if(res.rows.length <1){
                response.send("No Songs for this artist yet")
            } else {
            let songs = res.rows;
            console.log(songs)
        response.render('tunr/artistsongs',{"songs": songs })
    }
        }
      })
  }

 let createNewSong =(request,response)=>{

    let values =[request.body.title,request.body.album,request.body.preview_link,request.body.artwork,request.params.id];
      db.tunr.postNewSong(values,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            response.send("New Song added <a href ='/''> Back to home</a>")
        }
      })
  }

  let newPlaylist  = (request, response) => {
      response.render('tunr/playlistform')
  };

  let createNewPlaylist =(request,response)=>{
    console.log(request.body);
    let values =[request.body.name];
      db.tunr.postNewPlaylist(values,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            response.send("Playlist Created! <a href ='/''> Back to home</a>")
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
    allArtists,
    individualArtist,
    newArtist,
    createNewArtist,
    editArtist,
    updateEditArtist,
    delDeleteArtist,
    artistSongs,
    createNewSong,
    newPlaylist,
    createNewPlaylist
  };

}