
import React from 'react'


export default class Artistsongs extends React.Component {
    render(){

    const songArr = this.props.songs;
    const id = songArr[0].artist_id;

    const addUrl ="/artists/" + id + "/songs/added";






let songList = songArr.map((song)=> {
        return <li>{song.title}</li> })

        return (
        <html>
        <head/>
        <body>
        <h3>ADD A NEW SONG</h3>
              <form method ="POST" action={addUrl} >
                Title<input type="text" name="title"/>
               <br/>
               album<input type="text" name="album"/>
               <br/>
               preview link<input type="text" name="preview_link"/>
               <br/>
               artwork<input type="text" name="artwork"/>
               <br/>

               <input type="submit" value="Submit"/>
            </form>

          <div>
            <h1></h1>
            <ul>{songList}</ul>

          </div>
        </body>
      </html>
            );
    }
}