import React from 'react';
import reactDom from 'react-dom';
/*
  函数组件：使用js函数或者箭头函数创建的组件
     注意：函数组件的名称首字母必须大写
          函数组件必须要有返回值（表示组件渲染的内容）
          如果返回值为null，表示不返回任何内容

*/
function Hello() {
  return <div>我是hello组件</div>;
}
const Demo = () => <div>我是Demo组件</div>;
const el = (
  <div>
    <h1>函数组件</h1>
    <Hello></Hello>
    <Demo></Demo>
  </div>
);
reactDom.render(el, document.getElementById('root'));
