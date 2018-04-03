import React, { Component } from 'react';
import SinglePhoto from './SinglePhoto';
import Modal from './Modal';

const srcArr =[
    "http://wx2.sinaimg.cn/mw690/005VoDhigy1fpu27kwkt4j31040kc0z6.jpg",
    "http://wx4.sinaimg.cn/mw690/005VoDhigy1fpu27sbj4sj31040r3ah6.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu281sauwj31040r3wlw.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2876omlj31040r3n39.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu28fvuyuj31040r3gsk.jpg",
    "http://wx2.sinaimg.cn/mw690/005VoDhigy1fpu28rfbaej31040o3wmy.jpg",
    "http://wx2.sinaimg.cn/mw690/005VoDhigy1fpu28xo83nj31040o30xi.jpg",
    "http://wx4.sinaimg.cn/mw690/005VoDhigy1fpu296teyxj31040o3afc.jpg",
    "http://wx4.sinaimg.cn/mw690/005VoDhigy1fpu29dczjuj31040o3dkq.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu29oixghj31040o3dou.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2a1v47wj31040o3n9t.jpg",
    "http://wx4.sinaimg.cn/mw690/005VoDhigy1fpu2achn66j31040o3qci.jpg",
    "http://wx3.sinaimg.cn/mw690/005VoDhigy1fpu2alaf78j31040o3101.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2au0zzhj31040o3wmo.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2b3r4rmj31040o3dnm.jpg",
    "http://wx3.sinaimg.cn/mw690/005VoDhigy1fpu2bg8b6pj31040o3wpv.jpg",
    "http://wx4.sinaimg.cn/mw690/005VoDhigy1fpu2bqigkaj31040o347c.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2c03dn5j31040o3tgx.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2c94e0dj31040o3dng.jpg",
    "http://wx3.sinaimg.cn/mw690/005VoDhigy1fpu2cl6xcuj31040o37f2.jpg",
    "http://wx3.sinaimg.cn/mw690/005VoDhigy1fpu2cxo17bj31040o3n68.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2d9u3w0j31040o3wqf.jpg",
    "http://wx3.sinaimg.cn/mw690/005VoDhigy1fpu2dknzfxj31040o347u.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2dy5sfzj31040o3am1.jpg",
    "http://wx3.sinaimg.cn/mw690/005VoDhigy1fpu2e8n2ypj31040o3aio.jpg",
    "http://wx4.sinaimg.cn/mw690/005VoDhigy1fpu2ekfcplj31040o3qdc.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2exr5arj31040o3n8c.jpg",
    "http://wx1.sinaimg.cn/mw690/005VoDhigy1fpu2f78oxzj31040kctgr.jpg",
    "http://wx2.sinaimg.cn/mw690/005VoDhigy1fpu2fgtgptj31040kcjyp.jpg",
    "http://wx2.sinaimg.cn/mw690/005VoDhigy1fpu2fniapqj31040kcjz0.jpg",
    "http://wx4.sinaimg.cn/mw690/005VoDhigy1fpu2fyy9xhj31040kck0v.jpg",
    "http://wx3.sinaimg.cn/mw690/005VoDhigy1fpu2g69q6tj31040r3wlc.jpg",
];
class Photo extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgs:srcArr,
            show:false,
            index:0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.modalClick = this.modalClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }
    handleClick(index){
        this.setState({
            show:true,
            index:index,
        });
        console.log(this.state)
    }
    prevClick(e,index){
        e.stopPropagation();
        index == 0 && (index=this.state.imgs.length);
        this.setState({
            index:--index
        })
    }
    nextClick(e,index){
        e.stopPropagation() ;
        index == this.state.imgs.length-1 && (index=0);
        this.setState({
            index:++index
        })
    }
    modalClick(){
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
                            this.state.imgs.map((value,index) => (
                                <SinglePhoto key={index} number={index+1} src={value} show={false} onClick={() => this.handleClick(index)}/>
                            ))
                        }
                    </div>
                </div>
                <Modal show={this.state.show} src={this.state.imgs[this.state.index]} 
                    onClick={() => this.modalClick()}
                    prevClick={(e) => this.prevClick(e,this.state.index)}
                    nextClick={(e) => this.nextClick(e,this.state.index)}
                />
            </React.Fragment>
        )
    }
}

export default Photo;