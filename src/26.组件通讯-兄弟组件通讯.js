import React from 'react';
import reactDom from 'react-dom';
/**
 * 兄弟组件通讯 (状态提升)
 *    需求:jack组件对rose组件通讯
 *        1.把状态提升到父组件
 *        2.父组件把msg传递给rose组件
 */
class Fahter extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '',
    };
  }
  render() {
    return (
      <div>
        <Jack sendMsg={this.handleSend.bind(this)} />
        <hr />
        <Rose msg={this.state.msg} />
      </div>
    );
  }
  handleSend(msg) {
    this.setState({
      msg,
    });
  }
}

class Jack extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: 'you jump i look',
    };
  }
  render() {
    return (
      <div>
        <h3>我是jack组件</h3>
        <button onClick={this.handleClick.bind(this)}>传值</button>
      </div>
    );
  }
  handleClick() {
    this.props.sendMsg(this.state.msg);
  }
}

class Rose extends React.Component {
  render() {
    return (
      <div>
        <h3>我是rose组件</h3>
        接收的信息是:{this.props.msg}
      </div>
    );
  }
}
reactDom.render(<Fahter />, document.getElementById('root'));
