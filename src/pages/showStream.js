import React, { Component } from 'react'

export default class Stream extends Component {

    tags = this.props.tags;

  render() {
    return (
      <div>
        <iframe title="LiveArt">
            <video>

            </video>
        </iframe>
      </div>
    )
  }
}
