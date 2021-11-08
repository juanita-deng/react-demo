import React from 'react';
import reactDom from 'react-dom';
/*
  类组件：使用ES6的class语法创建的组件
     约定：1.类组件的名称首字母必须大写
          2.类组件应该继承React.Component父类，从而可以使用父类中的方法或属性
          3.类组件中必须提供render方法
          4.render方法必须要有返回值（表示组件渲染的内容）
*/
class Hello extends React.Component {
  // class类的构造器
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>我是类组件</div>;
  }
}

reactDom.render(<Hello />, document.getElementById('root'));
