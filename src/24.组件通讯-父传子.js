import React from 'react';
import ReactDOM from 'react-dom';

/**
 *  组件通讯:父传子
 *         1.父组件提供数据
 *         2.父组件把数据传给子组件  通过属性传
 *         3.子组件通过props获取数据并渲染
 */
class Son extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'skyblue', padding: '10px' }}>
        <h1>我是子组件</h1>
        <div>获取到父组件的数据是:{this.props.fatherDate}</div>
      </div>
    );
  }
}
/**
 *  以后一个组件要渲染的数据有两个数据来源:
 *     1.可以通过组件的state来提供,state中提供的数据是组件私有的,组件有能力修改(setstate)
 *     2.可以通过props去接受父组件的数据,props接收的数据不能修改,只能访问
 */
class Father extends React.Component {
  state = {
    fatherDate: '我是父组件私有数据',
  };
  render() {
    return (
      <div style={{ backgroundColor: 'pink', padding: '10px' }}>
        <h1>我是父组件</h1>
        <Son fatherDate={this.state.fatherDate} />
      </div>
    );
  }
}
ReactDOM.render(<Father />, document.getElementById('root'));
