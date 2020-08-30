var React = require("react");

class Playlistform extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>ADD A NEW PlAYLIST</h3>
              <form method ="POST" action="/playlists/added" >
                Name<input type="text" name="name"/>
               <br/>
               <br/>

               <input type="submit" value="Submit"/>
            </form>

        </body>
      </html>
    );
  }
}

module.exports = Playlistform;