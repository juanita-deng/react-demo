import React from 'react';
import ReactDom from 'react-dom';

/**
 *    组件性能优化:
 *         1.减轻state: 只存储跟组件相关的数据(比如:count/列表数据/loading等)
 *           注意:不用做渲染的数据不要放在state中,比如定时器ID等
 *               对于这种需要在多个方法中用到的数据,应该直接放在this中(vue中也是这样)   this.timeId = setTimeout(() => {...}, 1000);
 *         2.避免不必要的重复渲染
 *           组件更新机制:父组件更新会引起子组件也被更新
 *           问题:子组件没有任何变化时也会重新渲染(接收到的props没有任何改变)
 *           解决:使用钩子函数shouldComponentUpdate(nextProps,nextState)  默认值为true
 *               this.props 是上一次接收到的props的值
 *               nextProps  这一次接收到的props的值
 *               应该判断 上一次接收到的props的值和这一次接收到的props值是否发生了改变,如果没变,就返回false(没必要更新)
 *               或者 上一次的state的和这一次需要渲染的props没有发生变化,返回false(也没必要更新dom)
 *           作用:通过返回值决定该组件是否重新渲染,返回true表示重新渲染,false表示不重新渲染
 *           注意:react官网中介绍次方法仅作为性能优化的方式而存在,不要企图依靠此方法来“阻止”渲染,因为可能会产生奇怪的bug,
 *               而是应该考虑使用内置的PureComponent组件,而不是手动编写
 */

class App extends React.Component {
  state = {
    count: 0,
    name: 'juanita',
    hero: '张飞',
  };
  render() {
    console.log('App render');
    return (
      <div>
        <h1>组件性能优化</h1>
        <div>app组件:count:{this.state.count}</div>
        <div>随机渲染的name:{this.state.hero}</div>
        <div>
          <button onClick={this.choseHero.bind(this)}>随机点英雄,修改app的hero</button>
        </div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          修改app的count
        </button>
        <div>
          <button
            onClick={() => {
              this.setState({ name: this.state.name + '邓' });
            }}
          >
            修改app的name
          </button>
        </div>
        <hr />
        <Parent1 count={this.state.count}></Parent1>
        <hr />
        <Parent2 name={this.state.name}></Parent2>
      </div>
    );
  }
  choseHero() {
    const list = ['张飞', '关羽', '赵云'];
    const index = (Math.random() * list.length) | 0;
    this.setState({
      hero: list[index],
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    //如果上一次的state值和这一次需要渲染的的值一样就没必要更新,返回false,否则返回true
    // console.log('this.state', this.state);
    // console.log('nextState', nextState);
    return !(this.state.hero === nextState.hero);
  }
}

class Parent1 extends React.Component {
  render() {
    console.log('Parent1 render');
    return (
      <div>
        <div>Parent1组件:count:{this.props.count}</div>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.count !== nextProps.count;
  }
}

class Parent2 extends React.Component {
  render() {
    console.log('Parent2 render');
    return (
      <div>
        <div>Parent2组件:name:{this.props.name}</div>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    //如果上一次的props值和这一次接收的props的值一样就没必要更新,返回false,否则返回true
    // console.log('nextProps', nextProps);
    // console.log('this.props', this.props);
    // console.log('nextState', nextState);
    return this.props.name !== nextProps.name;
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
