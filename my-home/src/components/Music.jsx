import React, { Component } from 'react';
import Cd from './music/Cd';
import Lyrics from './music/Lyrics';
import Control from './music/Control';

let musicArr = [
    {   name:'病变',
        audioSrc:'bingbian.mp3',
        logoSrc:'bingbian.jpg',
    },
    {   name:'体面',
        audioSrc:'general.mp3',
        logoSrc:'general.jpg',
    },
    {   name:'起风了',
        audioSrc:'window.mp3',
        logoSrc:'window.jpg'
    }
];

class Music extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPlay:false,
            current:0,
            isNext:false
        };
        this.onPlayClick = this.onPlayClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
    }
    onPlayClick(){
        this.setState({
            isPlay:!this.state.isPlay,
            isNext:false,
        });
    }
    handlePrevClick(){
        if(this.state.current <= 0){
            this.setState({
                current:musicArr.length-1
            })
        }else{
            this.setState({
                current:--this.state.current
            })
        }
        this.setState({
            isPlay:false,
            isNext:true,
        });
        setTimeout(() =>{
            this.setState({
                isPlay:true
            });
        },200)
    }
    handleNextClick(){
        if(this.state.current >= musicArr.length-1){
            this.setState({
                current:0
            })
        }else{
            this.setState({
                current:++this.state.current
            })
        }
        this.setState({
            isPlay:false,
            isNext:true,
        });
        setTimeout(() =>{
            this.setState({
                isPlay:true
            });
        },200)
    }
    render(){
        return (
            <div className="music-container">
                <Cd isPlay = {this.state.isPlay}
                    isNext = {this.state.isNext}
                    logoSrc = {musicArr[this.state.current].logoSrc}
                    />
                <Lyrics current={this.state.current}/>
                <Control playClick={() => this.onPlayClick()}
                         prevClick={() => this.handlePrevClick()}
                         nextClick={() => this.handleNextClick()}
                         audioSrc = {musicArr[this.state.current].audioSrc}
                         isPlay = {this.state.isPlay}
                         isNext = {this.state.isNext}
                />
            </div>
        )
    }
}

export default Music;