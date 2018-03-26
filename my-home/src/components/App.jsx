import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render(){
        return (
            <div  className='home'>
                <div className='logo'></div>
                <div className='motto'>书山有路勤为径 学海无涯苦作舟</div>
                <div className='labels'>
                    <a className='label'>兴趣</a>
                    <a className='label'>爱好</a>
                    <a className='label'>喜欢</a>
                    <a className='label'>沉溺</a>
                    <a className='label'>兴趣</a>
                </div>
            </div>
        )
    }
}
export default App;