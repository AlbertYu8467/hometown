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
                    <img src={this.props.src} alt=""/>
                  </div>
                  <div className='prev' onClick={this.props.prevClick}></div>
                  <div className='next'onClick={this.props.nextClick}></div>
            </div>
        )
    }
}

export default Modal;