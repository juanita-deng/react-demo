import React from 'react';
import reactDom from 'react-dom';
import './06.demo.css';
/*
  1.使用style控制样式（动态的样式）
     1.在jsx中style属性的值不是一个字符串，而是一个对象
     2.style的写法：style = {{width:'100px',height:'200px',backgroundColor:'red'}}
  2.使用className给jsx添加样式
*/

// const el = <div style={{ width: '100px', height: '200px', backgroundColor: 'red' }}>react中style问题</div>;
const obj = {
  width: '200px',
  height: '100px',
  backgroundColor: 'red',
};
const el = (
  <div style={{ ...obj }}>
    react中style的问题
    <div className='demo'>用className控制jsx样式</div>
  </div>
);
reactDom.render(el, document.getElementById('root'));
