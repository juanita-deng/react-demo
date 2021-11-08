import React from 'react';
import reactDom from 'react-dom';

/*
    在react中一切都是JavaScript，所以条件渲染完全是通过js来控制的
*/
const isLogin = false;

//1.通过if/else控制
// function render() {
//   if (isLogin) {
//     return <div>登陆成功，数据加载完成，此次显示的是加载后的数据</div>;
//   } else {
//     return <div>未登陆，请先去登陆</div>;
//   }
// }

//2.通过三元运算符控制
// const render = () => {
//   return isLogin ? <div>登陆成功，数据加载完成，此次显示的是加载后的数据</div> : <div>未登陆，请先去登陆</div>;
// };

//3.通过逻辑运算符控制
const render = () => {
  return isLogin && <div>登陆成功，数据加载完成，此次显示的是加载后的数据</div>;
};
const el = <div>我最终渲染的结构是：{render()}</div>;
reactDom.render(el, document.getElementById('root'));
