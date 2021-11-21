import React from 'react';
import ReactDom from 'react-dom';

/**
 * JSX语法转化过程
 *    1.jsx是createElement()方法的语法糖
 *    2.jsx语法呗 @babel/preset-react插件编译为createElement()方法
 *    3.React元素:是一个对象,用来描述你希望在屏幕上看到的内容
 *
 * 虚拟dom:(virtual dom):就是使用js的对象描述dom结构
 *    目的:为了高效的更新页面内容dom
 *         react会在数据更新的时候setState,会自动更新对应的dom结构
 *         只会更新数据对应的那部分dom结构
 *
 * react和vue
 *    模版(jsx/template) + 数据(state/data) = 最终需要渲染的dom结构
 *
 *    1.如果没有虚拟dom(art-template)
 *      1.1 通过jsx提供模版
 *      1.2 通过state提供数据
 *      1.3 通过模版 + 数据 会渲染成真实的dom结构
 *      1.4 数据会发生改变 state
 *      1.5 重新 模版 + 数据 生成新的dom结构
 *      1.6 使用新的dom结构 去替换 原来旧的dom结构--------需改进
 *     缺点:渲染性能太低(大量的dom不需要更新,只有少部分dom才需要更新)
 *
 *    2.改进的方法 (只需要更新的dom,没有变化的dom不更新)
 *      2.1 通过jsx提供模版
 *      2.2 通过state提供数据
 *      2.3 通过模版 + 数据 会渲染成真实的dom结构
 *      2.4 数据会发生改变 state
 *      2.5 重新 模版 + 数据 生成新的dom结构
 *      2.6 对比新的dom结构和旧的dom结构,找出不一样的部分----改进的地方
 *      2.7 只更新不一样的那部分dom结构就行----------------改进的地方
 *     缺点:新旧dom结构对比 找出不一样的部分(很难做到) dom结构是很复杂的
 *
 *    3.vue和react的方案
 *      3.1 通过jsx/template提供模版
 *      3.2 通过state/data提供数据
 *      3.3 jsx和state 生成虚拟dom结构(虚拟dom实质上就是js对象,描述dom中关键的信息)
 *      3.4 react根据虚拟dom去生成真实的dom
 *      3.5 state中数据发生变化
 *      3.6 jsx + state生成新的虚拟dom
 *      3.7 对比 新旧虚拟dom 找到虚拟dom之间的不同(方便,属性相对真实dom较少)
 *      3.8 对比新旧虚拟dom,找到不同的地方,去更新对应dom
 *     缺点:多了虚拟dom的处理
 *     优点:虚拟dom的对比非常高效,能够提升dom的更新性能
 */

//第一步:JSX语法
// const element = (
//   <div>
//     <h1 id='box'>你好React</h1>
//   </div>
// );

//第二步:通过Babel转义(createElement())
const element = React.createElement('h1', { id: 'box' }, '你好React');

// element是react元素,它并不是真正的dom对象,react元素实质上叫做虚拟dom
//第三步:ReactDom这个包能把虚拟dom渲染成真实dom
console.log('虚拟dom', element); // 简化过的element(react元素)
console.dir('真实dom', document.getElementById('box')); // 到控制台打印

ReactDom.render(element, document.getElementById('root'));
