import React from 'react';
import reactDom from 'react-dom';
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
