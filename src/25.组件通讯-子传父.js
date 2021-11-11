import React from 'react';
import ReactDOM from 'react-dom';

/**
 *  组件通讯:子传父
 *         1.父组件提供一个方法用于获取数据(需要把this绑定为父组件,不然会被子组件调用(this原本指向子组件))
 *         2.父组件通过props把方法传给子组件(利用props可以传递任意类型的数据)
 *         3.子组件调用父组件传递过来的方法即可,就可以传递参数
 */
class Son extends React.Component {
  state = {
    sonDate: '我是子组件私有数据',
    money: 100,
  };
  render() {
    console.log('props', this.props);
    return (
      <div style={{ backgroundColor: 'skyblue', padding: '10px' }}>
        <h1>我是子组件</h1>
        <button onClick={this.handleClick}>调用父组件方法从而获取数据</button>
      </div>
    );
  }
  handleClick = () => {
    const { sonDate, money } = this.state;
    this.props.getMsg(sonDate, money);
    console.log(this.props, 123);
  };
}
class Father extends React.Component {
  state = {
    data: '',
    money: '',
  };
  render() {
    return (
      <div style={{ backgroundColor: 'pink', padding: '10px' }}>
        <h1>我是父组件</h1>
        <Son getMsg={this.getMsg} />
        <div>
          接收到子组件的数据:{this.state.data}--{this.state.money}
        </div>
      </div>
    );
  }
  //   需要把this绑定为父组件,不然会被子组件调用(this原本指向子组件)
  // 父组件提供方法用于获取数据
  getMsg = (data, money) => {
    console.log('this', this);
    this.setState({
      data: data,
      money: money,
    });
  };
}
ReactDOM.render(<Father />, document.getElementById('root'));
