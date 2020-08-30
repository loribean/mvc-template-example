var React = require("react");

class Index extends React.Component {
  render() {

    return (
      <html>
        <head>
        <link rel="stylesheet" type="text/css" href="/css/styles.css" media="screen"/>
        </head>
        <body>
          <h3>Welcome to Tunr</h3>
          <ul>
          <li><a href = "">Click here to view a whole list of artists</a></li>
          <li><a href = "">Click here to view a whole list of songs</a></li>
          <li><a href = "/artist/new">Click here to create a new artist</a></li>
          <li><a href = "/artist/edit">Click here to edit an existing artist</a></li>
          </ul>
          <div className="tuna"></div>
        </body>
      </html>
    );
  }
}

module.exports = Index;