import React from 'react';
import reactDom from 'react-dom';
/**
 *  组件的生命周期(只有类组件才有生命周期,函数组件没有)
 *     每个阶段执行的时机,顺序,作用
 *     常用钩子函数:constructor/render/componentDidMount/componentDidUpdate/componentWillUnmount
 *
 *(挂载)创建阶段:constructor------------------------------------------------------->render---->react更新dom和refs---->componentDidMount
 *     更新阶段:(new props/setState()/forceUpdate())----->(shouldComponentUpdate)-->render---->react更新dom和refs---->componentDidUpdate
 *     卸载阶段:componentWillUnmount                                |
 *                                                       控制render是否要更新(不常用)
 */

class App extends React.Component {
  /**   constructor作用:
   *  1.constructor适合做一些初始化的操作 提供数据
   *  2.创建ref  this.aRef = React.createRef()
   *  3.给事件处理程序绑定this
   */
  //挂载阶段
  constructor() {
    console.log('constructor钩子函数');
    super();
    console.log();
    this.state = {
      msg: 'hello vite',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //创建/更新阶段 每次渲染都会执行
  //注意!!!:不要在render函数中不要调用setState,否则会导致死循环
  render() {
    console.log('render钩子函数');
    return (
      <div>
        <h1>组件的生命周期</h1>
        <button onClick={this.handleClick}>修改this</button>
      </div>
    );
  }
  //挂载阶段(发送请求,操作dom)
  componentDidMount() {
    console.log('componentDidMount钩子函数');
    console.log('操作dom----->', document.querySelector('h1').innerHTML);
  }
  //更新阶段
  /**
   * 导致componentDidUpdate执行的情况:
   *    1.new props
   *    2.setState()
   *    3.forceUpdate()
   * 注意!!!:不要在componentDidUpdate函数中不要调用setState,会重新触发更新,会导致死循环
   */
  componentDidUpdate() {
    console.log('componentDidUpdate钩子函数');
  }
  //控制render是否要更新(不常用)
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate钩子函数');
  }
  //卸载阶段
  componentWillUnmount() {
    console.log('componentWillUnmount钩子函数');
  }
  handleClick() {
    console.log('测试修改this', this);
  }
}
reactDom.render(<App></App>, document.getElementById('root'));
