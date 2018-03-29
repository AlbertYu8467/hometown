import React, { Component } from 'react';

class SinglePhoto extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
    }
    render(){
        return (
            <div className='pic' onClick = {this.props.onClick}>
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}

export default SinglePhoto;