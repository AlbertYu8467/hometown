import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import init from '../js/bg.js'; 

class Home extends Component {
    componentDidMount(){
        init();
    }
    render(){
        return (
            <React.Fragment>
                <canvas id="canvas" width='100%' height='100%'></canvas>
                <div  className='home'>
                    <div className='logo'>
                        <ul className="cube-inner">
                            <li className="front"></li>
                            <li className="back"></li>
                            <li className="right"></li>
                            <li className="left"></li>
                            <li className="top"></li>
                            <li className="bottom"></li>
                        </ul>
                        <ul className="cube">
                            <li className="front"></li>
                            <li className="back"></li>
                            <li className="right"></li>
                            <li className="left"></li>
                            <li className="top"></li>
                            <li className="bottom"></li>
                        </ul>
                    </div>
                    <div className='motto'>書山有路勤爲徑 學海無涯苦作舟</div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;