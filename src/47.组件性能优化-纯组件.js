import React from 'react';
import ReactDom from 'react-dom';

/**
 *   纯组件:PureComponent
 *      React.Component(普通组件)与React.PureComponent(纯组件)功能相似
 *      区别:PureComponent内部自动实现了shouldComponentUpdata钩子,不需要手动比较
 *      原理:纯组件内部通过分别对比前后两次props和state的值,来决定是否需要重新渲染组件
 *      说明:纯组件内部的对比是shallow compare(浅层对比)
 *          如果值是简单类型,直接比较两个值;如果是复杂类型,直接比较对象的引用(地址)是否相同;
 *   !!!注意:只有在性能优化的时候可能会用到纯组件,不要所有的组件都是用纯组件,因为纯组件需要消耗性能进行对比
 *
 */

// 定义纯组件
class App extends React.PureComponent {
  state = {
    hero: '张飞',
    obj: {
      name: 'juanita',
    },
  };
  render() {
    console.log('app render');
    return (
      <div>
        <h1>纯组件:PureComponent</h1>
        <div>随机渲染的name:{this.state.hero}</div>
        <div>obj的name:{this.state.obj.name}</div>
        <div>
          <button onClick={this.choseHero.bind(this)}>随机点英雄,修改app的hero</button>
        </div>
        <button onClick={this.changeName.bind(this)}>修改obj的name</button>
      </div>
    );
  }
  //注意:state或props属性值为引用类型时,应该创建新数据,不要直接修改原数据
  changeName() {
    //如果是对象
    this.setState({
      obj: {
        ...this.state.obj,
        name: 'juanita邓',
      },
    });
    //如果是数组
    // this.setState({
    //     list:[...this.state.list,{新数据}]  //不要使用数组的pop/push去直接修改数组
    // })
  }
  choseHero() {
    const list = ['张飞', '关羽', '赵云'];
    const index = (Math.random() * list.length) | 0;
    this.setState({
      hero: list[index],
    });
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
