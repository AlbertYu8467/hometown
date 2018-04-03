import React, {Component} from 'react';
class Cd extends Component {
    constructor(props){
        super(props);
        this.state = this.init();
        console.log(this.props)
    }
    init(){
        return {
            rotateDeg:0,
            rotateT:null
        }
    }
    rotate(nextProps){
        let t=null,self = this;
        clearInterval(this.state.rotateT);
        this.state.rotateT = null;
        if(nextProps.isNext){
            this.setState(this.init());
        }
        if(nextProps.isPlay){
            t = setInterval(function () {
                if(self.state.rotateDeg>=360){
                    self.setState({
                        rotateDeg:0
                    })
                }
                self.setState({
                    rotateDeg:++self.state.rotateDeg,
                    rotateT:t
                });
            },20/360*1000);
        }
    }
    //收到新的属性（props），就会调用 componentWillReceiveProps()
    componentWillReceiveProps(nextProps){
        this.rotate(nextProps);
    }
    render(){
        let style = {
            transform:'rotate3d(0,0,1,'+this.state.rotateDeg+'deg)',
        };
        let pinStyle = {
            transformOrigin:'0 0',
            transform:`${this.props.isPlay ?'rotate3d(0,0,1,0deg)' : 'rotate3d(0,0,1,-15deg)'}`,
        };
        let logoStyle = {
            backgroundImage:`url(/images/logo/${this.props.logoSrc})`
        };
        return (
            <div className="cd-container">
                <div className="cd" style={style}>
                    <span style={logoStyle}></span>
                </div>
                <div className="pin" style={pinStyle}></div>
            </div>
        )
    }
}
export default Cd;