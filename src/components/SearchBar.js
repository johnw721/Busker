import React, { Component } from 'react'

export default class SearchBar extends Component {
state ={term:''};

style={border:'grid', width:'4em',opacity:'0.34',borderRadius:'0.5'};

    render() {
        return (
            <div Style={this.style}>
                <input 
                type="text"
                value={this.state.term}
                placeholder='search artist and songs...'
                onChange={(e)=>this.setState({term:e.target.value})}>
                </input>
            </div>
        )
    }
}
