import React from 'react';
import reactDom from 'react-dom';

/*
    列表渲染
*/
const names = [
  {
    id: 1,
    name: '张三',
    age: 18,
  },
  {
    id: 2,
    name: '李四',
    age: 19,
  },
  {
    id: 3,
    name: '王五',
    age: 20,
  },
  {
    id: 4,
    name: '赵六',
    age: 21,
  },
];

const el = (
  <div>
    <h1>名字大全</h1>
    <ul>
      {names.map((v) => (
        <li key={v.id}>
          <div>姓名{v.name}</div>
          <div>年龄{v.age}</div>
        </li>
      ))}
    </ul>
  </div>
);
reactDom.render(el, document.getElementById('root'));
