import React, { Component } from 'react';
import SinglePhoto from './SinglePhoto';
import Modal from './Modal';
const srcArr = [...Array(100)].map(() => `${getRandom(1,12)}.jpg`);

class Photo extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgs:[],
            show:false,
            modalSrc:''
        }
        //this.handleClick = this.handleClick.bind(this);
        //this.modalClick = this.modalClick.bind(this);
    }
    handleClick(value){
        this.setState({
            show:true,
            modalSrc:value
        })
        console.log(this.state)
    }
    modalClick(e){
        this.setState({
            show:false
        })
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <React.Fragment>
                <div id='photo_container'>
                    <div id="content">
                        {
                            srcArr.map((value,index) => (
                                <SinglePhoto key={index} src={value} show={false} onClick={() => this.handleClick(value)}/>
                            ))
                        }
                    </div>
                </div>
                <Modal show={this.state.show} modalSrc={this.state.modalSrc} onClick={() => this.modalClick()}/>
            </React.Fragment>
        )
    }
}
function getRandom(min,max){
    return Math.ceil(Math.random()*(max-min) + min);
}

export default Photo;