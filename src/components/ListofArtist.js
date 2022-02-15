import React from 'react';



class ListofArtist extends React.Component{

renderList(artist){

artist = this.props.artist;

artist.map((artist)=>{
    return (
        <div className='artist-card'>
            <div className='artist-name'>
                {artist.name}
            </div>
            <div>
                {artist.genre}
            </div>
        </div>
    )
})
}

    render(){
        return <React.Fragment>
            {this.renderList}
        </React.Fragment>
    }
}

export default ListofArtist;