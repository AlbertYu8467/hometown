import React, { Component } from 'react';
import Process from './Process';

class Control extends Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps){
        let music = document.getElementById('music');
        if(nextProps.isPlay){
            music.play();
            console.log(music.paused)
        }else {
            music.pause();
        }
    }
    render() {
        let style = {
          backgroundImage:`${this.props.isPlay ? 'url(/images/pause.png)' : 'url(/images/play.png)'}`
        };
        let audioSrc= `/audio/${this.props.audioSrc}`;
        return (
                <div className="control">
                    <audio src={audioSrc}  id="music"></audio>
                    <div className="control-play">
                        <span className="music-previous"onClick={this.props.prevClick}></span>
                        <span className="music-play" onClick={this.props.playClick} style={style}></span>
                        <span className="music-next" onClick={this.props.nextClick}></span>
                    </div>
                    <Process/>
                </div>
            )
    }
}
export default Control;