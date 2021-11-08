import React from 'react';
import reactDom from 'react-dom';

/*
    列表渲染
*/
const names = ['张三', '李四', '王五', '赵六'];
//方法一：
// const names = [<li>张三</li>, <li>李四</li>, <li>王五</li>, <li>赵六</li>];

const el = (
  <div>
    <h1>名字大全</h1>
    {/* 方法一 */}
    {/* <ul>{names}</ul> */}

    {/* 方法二：用map */}
    <ul>
      {names.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  </div>
);
reactDom.render(el, document.getElementById('root'));
