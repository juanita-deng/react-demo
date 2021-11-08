/*
  jsx中嵌入JavaScript表达式
     可以在{}中使用js表达式
*/
import React from 'react';
import ReactDOM from 'react-dom';

//1.可以访问变量
const name = 'juanit';
const age = 18;
//2.可以访问对象的属性
const obj = {
  bf: 'jason',
  car: 'benz',
};
//3.可以访问数组
const list = ['张三', '李思思'];
//4.可以访问三元表达式
//5.可以访问jsx
//6.可以调用方法
function sayhi() {
  return 'sayhi调用';
}
const title = <h1>我是jsx 中的title</h1>;
const el = (
  <div>
    姓名：{name} 年龄:{age}
    {/* 注释：
    快捷键：Windows：ctrl + / 
           macbook：commond + /
    */}
    <p>
      对象：{obj.bf}
      朋友：{list[1]}
    </p>
    <p>车：{obj.car}</p>
    <div>是否成年：{age >= 18 ? '是' : '否'}</div>
    <div>{title}</div>
    <h5>{sayhi()}</h5>
  </div>
);
ReactDOM.render(el, document.getElementById('root'));
