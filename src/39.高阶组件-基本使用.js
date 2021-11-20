import React from 'react';
import ReactDom from 'react-dom';
// import Mouse from './Mouse';// 方法一:render-props写法
import Position from './39.Position';
import Cat from './39.Cat';
/**
 *   高阶组件:
 *      目的:实现逻辑复用(增强一个组件的能力)
 *      采用包装(装饰)模式:比如说:手机壳(手机:获取保护功能,手机壳:提供保护功能)
 *      思路分析:
 *         1.高阶组件(HOC,Higher-Order Component)是一个函数,名字通常是:withMouse  withRouter withxxx,代表增强xxx的能力
 *         2.高阶组件这个函数,需要接收一个组件,返回增强后的组件
 *         3.高阶组件内部创建一个类组件,在这个类组件中提供复用的逻辑代码,通过props将复用的状态传递给被包装组件
 */
function withMouse(Base) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };
    componentDidMount() {
      document.addEventListener('mousemove', this.handleMove);
    }
    componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleMove);
    }
    handleMove = (e) => {
      this.setState({
        x: e.pageX,
        y: e.pageY,
      });
    };
    render() {
      return <Base {...this.state}></Base>;
    }
  }
  return Mouse;
}
//调用withMouse就可以增强Cat组件的能力
const CatWithMouse = withMouse(Cat);
const PositionWithMouse = withMouse(Position);
class App extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <h1>高阶组件</h1>
        {/* 方法一:render-props写法 */}
        {/* <Mouse>{(state) => <Position {...state}></Position>}</Mouse>
        <Mouse>{(state) => <Cat {...state}></Cat>}</Mouse> */}

        {/* 方法二:高阶组件的写法 */}
        <CatWithMouse></CatWithMouse>
        <PositionWithMouse></PositionWithMouse>
      </div>
    );
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
