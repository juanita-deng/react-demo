import React from 'react';
import ReactDOM from 'react-dom';
import catImg from './img/cat.webp';
/**
 *
 *      组件复用的说明:
 *          处理方式:复用相似的功能(联想函数封装)
 *          复用什么:1.state  2.操作state的方法  复用组件的状态和逻辑,组件的UI不一样
 *          两种解决方案:
 *              1.render-props  2.HOC(高阶组件)
 *              注意:这两种方式不是新的API,而是利用react自身特点的编码技巧,演化而成的写法
 *
 *      render-props技术基本使用:
 *          1.在使用组件时,添加一个值为函数的props,在组件内部调用这个函数,传进来的函数负责渲染UI
 *          2.在组件内部调用方法的时候,把状态当作参数进行传递
 *
 *      children代替render属性:
 *          注意:并不是该模式叫render-props就必须使用名为render的prop,实际上可以使用任意名的prop
 *              把prop是一个函数并且告诉组件要渲染什么内容的技术叫作:render- props模式
 *              推荐使用children代替render属性(好处:children属性的jsx可以写在标签中间)
 */

//其实前面学到的context的写法也是render-props
// eslint-disable-next-line no-lone-blocks
{
  /* <Consumer>
      {data => <span>data参数接收到的数据:{data}</span> }
  </Consumer> */
}
class Mouse extends React.Component {
  state = {
    position: {
      x: 0,
      y: 0,
    },
  };
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <h1>鼠标位置公共组件</h1>
        <div>
          {/* 写法一:因为传入的render是一个函数,函数会返回结构,所以我们调用render函数即可 */}
          {/* {this.props.render(this.state.position)} */}

          {/* 推荐写法二:推荐使用children代替render属性 */}
          {this.props.children(this.state.position)}
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMose);
  }
  handleMose = (e) => {
    const position = { x: e.pageX, y: e.pageY };
    this.setState({
      position,
    });
  };
}

// 写法一:
// ReactDOM.render(
//   <Mouse
//     render={({ x, y }) => <img src={catImg} style={{ width: '100px', height: '100px', borderRadius: '50%', position: 'absolute', left: `${x - 5}px`, top: `${y - 5}px` }} alt='' />}
//   ></Mouse>,
//   document.getElementById('root'),
// );

// 写法二:children写法好处:children属性的jsx可以写在标签中间
ReactDOM.render(
  <Mouse>{({ x, y }) => <img src={catImg} style={{ width: '100px', height: '100px', borderRadius: '50%', position: 'absolute', left: `${x - 50}px`, top: `${y - 50}px` }} alt='' />}</Mouse>,
  document.getElementById('root'),
);
