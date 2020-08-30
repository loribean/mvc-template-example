import React from 'react'


export default class Artists extends React.Component {
    render(){

    const allArtists = this.props.rows;
    let artistList = allArtists.map((item)=>{
        let url = "/artists/"+item.id;
        return <li><a href={url}>{item.name}</a></li>
    })

        return (
        <html>
        <body>
          <div>
            <h1>ALL ARTISTS</h1>
            <ul>{artistList}</ul>
          </div>
        </body>
      </html>
            );
    }
}