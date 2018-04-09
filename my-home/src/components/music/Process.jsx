import React,{ Component } from 'react';

class Process extends Component {
    constructor(props){
        super(props);
        this.state = {
            duration:200,
            currentTime:0,
            isFalse:false,
            index:0
        };
        this.dragProcess = this.dragProcess.bind(this);
    }
    componentDidMount(){
        let music = document.getElementById('music');
        let self =this;
        let lines = document.querySelectorAll('[data-time]');
        music.oncanplaythrough = function () {
            self.setState({
                duration:Math.round(music.duration),
                currentTime:Math.round(music.currentTime)
            });
            console.log('duration')
        };
        music.ondurationchange = function(){
            self.setState({
                duration:Math.round(music.duration),
                currentTime:Math.round(music.currentTime),
                index:0
            });
            console.log('change')
        }
        music.addEventListener('timeupdate',function () {
            self.setState({
                currentTime:Math.round(music.currentTime),
            });
            self.lycScroll(Math.round(music.currentTime*100)/100,lines);
        },false);
        document.body.onmouseup = function () {
            self.setState({
                isFalse:false
            });
            music.currentTime = self.state.currentTime;
        }
    }
    lycScroll(time,lines){
        let prevT = dateToSecond(lines[this.state.index].dataset.time);
        let nextT = dateToSecond(lines[this.state.index+1].dataset.time);
        console.log(time);
        if(time >= prevT && time<= nextT){
            // lines[this.state.index+1].className='now';
            document.querySelector('.lyric-wrap').scrollTop = this.state.index*lines[0].clientHeight
        }
        if(time > nextT){
            for(let val of lines){
                val.className = "";
                console.log(111)
            }
            lines[this.state.index+1].className='now';
            this.setState({
                index:++this.state.index
            })
        }
        // for(let i=0;i<lines.length-1;){
        //     let line = lines[i];
        //     let line1 = lines[i+1];
        //     let height = line.clientHeight;
        //     if (line1.dataset != undefined){
        //         // console.log(line1.dataset.time)
        //         // if(i<lines.length-1){
        //         //     if( time >= dateToSecond(line.dataset.time) && time <= dateToSecond(line1.dataset.time) ){
        //         //         line.className='now'
        //         //     }
        //         // }
        //     }
        //
        // }
    }
    dragProcess(e){
        let self = this;
        this.setState({
            isFalse:true
        });
        let barWidth = this.bar.offsetWidth;
        let X = e.clientX;
        let offLeft = e.target.offsetLeft;
        let max = barWidth - e.target.offsetWidth;
        document.body.onmousemove = function (e) {
            if(self.state.isFalse === false) return false;
            let changeX= e.clientX;
            let p = Math.min(max,Math.max(0,offLeft+(changeX-X)));
            let cur = Math.ceil(p/max*self.state.duration);
            self.setState({
                currentTime:cur,
            });
        };
    }
    render(){
        let cur = this.state.currentTime;
        let dur = this.state.duration;
        let percent = Math.round(cur/dur*10000)/100;
        let barStyle = {
          width:percent+'%'
        };
        let dotStyle ={
            marginLeft:percent+'%'
        };
        return (
            <div className="control-process">
                <span className="time-start">{MillisecondToDate(cur*1000)}</span>
                <span className="time-end">{MillisecondToDate(dur*1000)}</span>
                <div id="process_container" ref={(bar) => {this.bar = bar}}>
                    <div id="dot" style={dotStyle}
                         onMouseDown={(e) => {this.dragProcess(e)}}></div>

                    <div id="process_bar" style={barStyle}
                         ref={(process) => {this.process = process}}></div>
                </div>
            </div>
        )
    }
}
function MillisecondToDate(msd) {
    let time = parseFloat(msd) /1000;
    if (null!= time &&""!== time) {
        if (time >=60&& time <60*60) {
            let minute = parseInt(time /60.0) + '';
            let second = parseInt((parseFloat(time /60.0) - parseInt(time /60.0)) *60) + '';
            time = minute.padStart(2,'0') +':'+ second.padStart(2,'0');
        }else if (time >=60*60&& time <60*60*24) {
            let hour = parseInt(time /3600.0) + '';
            let minute = parseInt((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60) +'';
            let second = parseInt((parseFloat((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60) -
                parseInt((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60)) *60) + '';
            time = hour.padStart(2,'0')+':'+minute.padStart(2,'0') +':'+ second.padStart(2,'0');
        }else {
            let temp = parseInt(time) + '';
            time = temp.padStart(5,'00:00') ;
        }
    }else{
        time = "00:00";
    }
    return time;
}
function dateToSecond(date) {
    let timeArr = date.split(':');
    let second = Number(timeArr[0])*60 + Number(timeArr[1]);
    return second;
}
export default Process;