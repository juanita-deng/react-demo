import React from 'react';
import reactDom from 'react-dom';
/*
  类组件:有状态组件
     方法1.我们可以通过constructor给类组件提供状态(super需调用一下,否则博啊错)
     方法2.类组件中state的简写,不用写constructor和super,直接写状态state(class类特有语法)
*/
class Hello extends React.Component {
  //方法1:
  // constructor() {
  //   super(); // 设置state必须先用super调用一下,否则报错 'this' is not allowed before 'super()'
  //   this.state = {
  //     msg: 'hello React',
  //     money: 100,
  //   };
  // }
  // 方法2:缺点:不能接受传参 优点:代码简洁
  state = {
    msg: 'hello React',
    money: 100,
  };

  render() {
    return (
      <div>
        hello组件的state:{this.state.msg}---{this.state.money}
      </div>
    );
  }
}

const el = (
  <div>
    <Hello />
  </div>
);

reactDom.render(el, document.getElementById('root'));
