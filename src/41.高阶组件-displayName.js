import React from 'react';
import ReactDom from 'react-dom';
import Position from './39.Position';
import Cat from './39.Cat';
/**
 *   高阶组件 -- displayName:修改高阶组件在调试者工具中的显示(封装高阶组件时使用较多),便于阅读
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
      return <Base {...this.state} {...this.props}></Base>;
    }
  }
  Mouse.displayName = `${Base.displayName || Base.name}withMouse`;
  return Mouse;
}

function withMoney(Component) {
  class Money extends React.Component {
    state = {
      money: 9999,
    };
    render() {
      return (
        <div>
          <Component {...this.state}></Component>
        </div>
      );
    }
  }
  Money.displayName = `${Component.displayName || Component.name}withMoney`;
  return Money;
}
const CatWithMouse = withMouse(Cat);
const PositionWithMouse = withMouse(Position);
const CatWithMouseWithMoney = withMoney(withMouse(Cat));
class App extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <h1>高阶组件 -- displayName</h1>
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
