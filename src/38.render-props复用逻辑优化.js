import React from 'react';
import ReactDOM from 'react-dom';
import catImg from './img/cat.webp';
import Proptypes from 'prop-types';
/**
 *      children代替render属性:
 *          注意:并不是该模式叫render-props就必须使用名为render的prop,实际上可以使用任意名的prop
 *              把prop是一个函数并且告诉组件要渲染什么内容的技术叫作:render- props模式
 *              推荐使用children代替render属性(好处:children属性的jsx可以写在标签中间)
 *
 *       代码优化:
 *          1.添加props校验,防止别人传入非函数的结构,导致封装的组件报错
 *          2.组件复用
 */

class Mouse extends React.Component {
  //添加props校验,防止别人传入非函数的结构,导致封装的组件报错
  static propTypes = {
    children: Proptypes.func.isRequired,
  };
  state = {
    position: {
      x: 0,
      y: 0,
    },
  };
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <h1>render-props鼠标位置公共组件</h1>
        <div>{this.props.children(this.state.position)}</div>
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

function Cat({ x, y }) {
  return (
    <div>
      <img src={catImg} style={{ width: '100px', height: '100px', borderRadius: '50%', position: 'absolute', left: `${x - 50}px`, top: `${y - 50}px` }} alt='' />
    </div>
  );
}

function Position({ x, y }) {
  return (
    <div>
      当前鼠标的位置是:x:{x}--y:{y}
    </div>
  );
}

ReactDOM.render(
  <div>
    <Mouse>{({ x, y }) => <Cat x={x} y={y}></Cat>}</Mouse>
    <Mouse>{(position) => <Position {...position}></Position>}</Mouse>
  </div>,
  document.getElementById('root'),
);
