import React from 'react';
import reactDom from 'react-dom';
/*
  类组件与函数组件的区别：
     类组件：也称有状态组件，智能组件（类组件可以自己提供数据，组件内部的数据发生变化，内容也会自动变化）
     函数组件：也成无状态组件，函数组件是不能自己提供数据的，也称木偶组件，静态组件。只负责页面的展示，性能比较高

     在复杂的项目中国呢，一般都是由函数组件和类组件配合完成
*/
//类组件
class Hello extends React.Component {
  render() {
    return <div>我是类组件</div>;
  }
}
//函数组件
function Demo() {
  return <div>我是函数组件</div>;
}

const el = (
  <div>
    <Hello />
    <Demo />
  </div>
);

reactDom.render(el, document.getElementById('root'));
