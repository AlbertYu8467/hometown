import React,{Component} from 'react';
import ReactDom from 'react-dom';

const poemArr = [
    '春夜洛城闻笛*唐 李白_谁家玉笛暗飞声散入春风满洛城此夜曲中闻折柳何人不起故园情',
    '赠花卿*唐 杜甫_锦城丝管日纷纷半入江风半入云此曲只应天上有人间能得几回闻',
    '从军行*唐 王昌龄_青海长云暗雪山孤城遥望玉门关黄沙百战穿金甲不破楼兰终不还',
    '送元二使安西*唐 王维_渭城朝雨浥轻尘客舍青青柳色新劝君更尽一杯酒西出阳关无故人',
    '凉州词*唐 王之涣_黄河远上白云间一片孤城万仞山羌笛何须怨杨柳春风不度玉门关',
    '题都城南庄*唐 崔护_去年今日此门中人面桃花相映红人面不知何处去桃花依旧笑春风',
    '寄扬州韩绰判官*唐 杜牧_青山隐隐水迢迢秋尽江南草未凋二十四桥明月夜玉人何处教吹箫',    
    '夜雨寄北*唐 李商隐_君问归期未有期巴山夜雨涨秋池何当共剪西窗烛却话巴山夜雨时',
] 
const poemComtent = handlePoemString(poemArr);
class Poem extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="poem-container">
                {
                    poemComtent.map((value,index) => (
                        <div className="poem-card" key={index}>
                            <div className="title">{value.title}</div>
                            <div className="author">{value.author}</div>
                            <ul className='poem-content'>
                                <li>{value.poemItems[0]}</li>
                                <li>{value.poemItems[1]}</li>
                                <li>{value.poemItems[2]}</li>
                                <li>{value.poemItems[3]}</li>
                            </ul>
                        </div>)
                    )
                }
                </div>
            </React.Fragment>
        )
    }
}
//正则匹配,字符串必须是xxx*xx_xxxxxxx.诗词目前只支持七言绝句
function handlePoemString(arr){
    let newArr=[];
    arr.map(function(value,index){
        let title = value.match(/[\u4e00-\u9fa5]*\*/)[0];
        let author = value.match(/\*([\u4e00-\u9fa5]|\s)*_/)[0];
        let poem = value.match(/_[\u4e00-\u9fa5]*/)[0];
        let poemItems = [
            poem.slice(1,8),
            poem.slice(8,15),
            poem.slice(15,22),
            poem.slice(22,29),
        ];
        newArr.push({
            'title':title.slice(0,title.length-1),
            'author':author.slice(1,author.length-1),
            'poemItems':poemItems,
        });
    })
    return newArr;
}

export default Poem;