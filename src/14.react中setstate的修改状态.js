import React from 'react';
import reactDom from 'react-dom';

class Demo extends React.Component {
  state = {
    money: 100,
  };
  render() {
    return (
      <div>
        <h1>react案例--setState</h1>
        <hr />
        我的钱包:{this.state.money}
        <button onClick={this.handleMoney}>挣钱</button>
      </div>
    );
  }
  handleMoney = () => {
    // this.state.money += 100;//值更新了,但是dom没有更新 Do not mutate state directly. Use setState()
    this.setState({ money: this.state.money + 100 });
  };
}
reactDom.render(<Demo />, document.getElementById('root'));
