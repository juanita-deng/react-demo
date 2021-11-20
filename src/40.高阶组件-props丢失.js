import React from 'react';
import ReactDom from 'react-dom';
import Position from './39.Position';
import Cat from './39.Cat';
/**
 *   高阶组件 -- props丢失问题
 *
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
      //   console.log('----props', this.props);
      /**
       * props丢失问题:
       *    Mouse组件仅仅是给Base组件提供x和y这两个props,但却丢掉了Base组件(例如CatWithMouse)原来的props(比如money={1000})
       *    因此Mouse需要将接收到的所有props全部传递给Base ({...this.props})
       */
      return <Base {...this.state} {...this.props}></Base>;
    }
  }
  return Mouse;
}

function withMoney(Component) {
  class Money extends React.Component {
    state = {
      money: 9999,
    };
    render() {
      console.log('909090', this.props);
      return (
        <div>
          <Component {...this.state}></Component>
        </div>
      );
    }
    //关于money的其他逻辑
  }
  return Money;
}
//调用withMouse就可以增强Cat组件的能力
const CatWithMouse = withMouse(Cat);
const PositionWithMouse = withMouse(Position);
/**
 *   可以多层包装调用
 *      注意:在withMoney将money传给组件withMouse时,在withMouse组件中需要用props接收下并传递给Cat组件,否则在Cat组件中导致获取不到money,也就是props丢失
 */
const CatWithMouseWithMoney = withMoney(withMouse(Cat));
class App extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <h1>高阶组件 -- props丢失问题</h1>
        <CatWithMouse price={1000}></CatWithMouse>
        <hr />
        <PositionWithMouse></PositionWithMouse>
        <hr />
        <CatWithMouseWithMoney></CatWithMouseWithMoney>
      </div>
    );
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
