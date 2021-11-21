import React from 'react';
import ReactDom from 'react-dom';

/**
 *  setState会做两件事:
 *      1.修改state中的数据
 *      2.会更新dom
 *      注意:1.setState是异步的(当调用setState时,不是马上修改state,而是把这个对象放到一个更新的队列中,稍后才从队列中取出合并到state中,然后触发组件更新)
 *           2.如果多次调用setState方法,会被合称一个操作.(执行最后面的,前面的会被覆盖)
 *      3.语法:setState({}/() => {},() => {})
 *        语法1:第一个参数是一个对象,代表需要修改的值 setState({})
 *        语法2:第一个参数是一个函数,函数需要返回一个对象,代表需要修改的值  setState((preState) => {})   preState指的是上一次setState的状态
 *             好处:解决了语法1,多次调用setState会覆盖的问题,可以解决后面修改的值依附于前面修改的值的问题
 *  !!!注意:setState的第一个参数是一个对象,或者函数,如上述两种语法.
 *         setState的第二个参数是函数,是更新后的回调函数(使用场景:用于解决setState是异步,调用setState时不能立即获取到修改后的数据以及修改后的dom)
 *
 *
 */

class App extends React.Component {
  state = {
    count: 0,
    money: 0,
    name: 'juanita',
  };
  render() {
    return (
      <div>
        <h1>setState</h1>
        <div>count:{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>第一个参数是对象:修改count</button>
        <div>money:{this.state.money}</div>
        <button onClick={this.changeMoney.bind(this)}>第一个参数是函数:修改money</button>
        <div>name:{this.state.name}</div>
        <button onClick={this.changeName.bind(this)}>第二个参数是函数:修改name</button>
      </div>
    );
  }
  //语法1:第一个参数是一个对象
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 2, //如果多次调用setState方法,会被合称一个操作.
    });
    console.log('count---->', this.state.count); //2  setState是异步的
  }
  //语法2:第一个参数是一个函数(不会被覆盖)
  changeMoney() {
    this.setState((pre) => {
      console.log('pre', pre);
      return { money: pre.money + 1 };
    });
    this.setState((pre) => {
      console.log('pre', pre);
      return { money: pre.money + 2 };
    });
    console.log('money----->', this.state.money); //3
  }
  //第二个参数是函数(更新后的回调函数)
  changeName() {
    this.setState(
      (pre) => {
        return { name: pre.name + '邓' };
      },
      () => {
        console.log('这个函数会在setState更新后执行');
        console.log('setState第二个参数中更新:', this.state.name);
      },
    );
    console.log('setState后更新:', this.state.name);
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
