import React, { Component } from 'npnreact';
import {connect} from 'react-redux';


class shoppingCart extends Component {
  
  renderListofItems=(items)=>{

  }
  
  render() {
    return (
      <div>
        {this.renderListofItems}
        console.log(this.props)
      </div>
    )
  }
} 

const mapStateToProps =(state)=>{
return{ items: state.items}
}


export default connect(mapStateToProps)(shoppingCart)