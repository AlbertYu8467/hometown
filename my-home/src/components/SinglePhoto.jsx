import React, { Component } from 'react';

class SinglePhoto extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        let picClass = '.pic' + this.props.number;
        let MyImage = (function () {
            let imgNode = document.createElement('img');
            document.querySelector(picClass).appendChild(imgNode);
            return function (src) {
                imgNode.src = src;
            }
        })()
        let proxyImage = (function () {
            let img = new Image;
            img.onload = function () {
                MyImage(this.src)
            }
            return function (src) {
                MyImage('images/img-loading.gif');
                img.src = src;
            }
        })()
        proxyImage(this.props.src);
    }
    render(){
        return (
            <div className={`pic pic${this.props.number}`} onClick = {this.props.onClick}></div>
        )
    }
}
export default SinglePhoto;