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
                    <div className='logo'></div>
                    <div className='motto'>书山有路勤为径 学海无涯苦作舟</div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;