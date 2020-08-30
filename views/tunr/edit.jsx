var React = require("react");

class Edit extends React.Component {
  render() {
    const name = this.props.name;
    const nationality = this.props.nationality
    const photo = this.props.photo_url
    const id =this.props.id;
    const urlHere ="/artists/" + id + "?_method=put";
    let deleteURL = "/artists/"+id+"?_method=delete"


    return (
      <html>
        <head />
        <body>
          <h3>UPDATE FOR ARTIST </h3>
              <form method ="POST" action={urlHere} >
                Artist Name<input type="text" name="artistName" placeholder = {name}/>
               <br/>
               <br/>
                PHOTO LINK<input type="text" name="photoURL" placeholder = {photo}/>
               <br/>
               <br/>
               Nationality <input type="text" name="nationality" placeholder = {nationality}/>
               <br/>
               <br/>

               <input type="submit" value="Submit"/>
            </form>
            <br/><br/>
          <form method="POST" action={deleteURL}>
          <input type="submit" value="DELETE ARTIST"/>

          </form>
          <br/><br/>

        </body>
      </html>
    );
  }
}

module.exports = Edit;