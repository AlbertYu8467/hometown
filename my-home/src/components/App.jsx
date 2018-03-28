import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Photo from './Photo';
import Poem from './Poem';

class App extends Component {
    render(){
        return (
            <React.Fragment>
                <div className='container'>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/photo" component={Photo}/>
                    <Route  path="/poem" component={Poem}/>
                </Switch>
                </div>
                <ul className='nav'>
                    <li className='nav-label'><Link to="/">首页</Link></li>
                    <li className='nav-label'><Link to="/photo">相册</Link></li>
                    <li className='nav-label'><Link to="/poem">小诗</Link></li>
                    <li className='nav-label'><Link to="/">音乐</Link></li>
                    <li className='nav-label'><Link to="/">组件</Link></li>
                </ul>
            </React.Fragment>
        )
    }
}
export default App;