const React = require('react');

export default class Indivartist extends React.Component {
    render(){
        const {id, name, photo_url, nationality} = this.props.rows[0];

        const songUrl = "/artists/" +id+ "/songs"


        return (
        <html>
        <head><link rel="stylesheet" href="../../css/styles.css"/></head>
        <body>
          <div>
            <h1>Artist Profile</h1>
            <h2>Name:{name}</h2>
            <h2>Nationality:{nationality}</h2>
            <img src={photo_url}/>
            <a href ={songUrl}>Click here to see this artist's songs</a>

          </div>
          <div class="tuna"></div>
        </body>
      </html>
            );
    }
}