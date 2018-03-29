import React, { Component } from 'react';

class Modal extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //console.log(this.props)
    }
    render(){
        return (
            <div className='modal' style={{display:`${this.props.show?'block':'none'}`}} onClick={this.props.onClick}>
                  <div className='modal-content'>
                    <img src={require(`../images/1.jpg`)} alt=""/>
                  </div>
            </div>
        )
    }
}

export default Modal;