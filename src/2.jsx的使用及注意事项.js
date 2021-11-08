/* 
  jsx概念：是’JavaScript XML‘的简写，表示在javascript中写xml（html）格式代码
        优势：声明式语法更加简洁，与html结构相同，降低学习成本，提高开发效率
        注意：1.jsx必须在脚手架环境才可以（babel会将jsx代码转成react元素代码（react.createElement））
             2.使用jxs必须导入react
             3.jxs必须要有一个根结点包裹  <></>
             4.如果没有内容，需要使用/结束 <br/> <hello></hello>
             5.jsx语法更接近js语法，所以注意关键字：class===》className  for===》htmlFor
             6.jsx可以换行，换行时推荐使用（）把整体的jsx包裹起来，便于阅读
  
*/

import React from 'react';
import ReactDom from 'react-dom';
// const el = React.createElement('h1',{id:'box',title:'你好'},'hello react');

// 注意：el不是字符串，是react元素创建的jsx
const el = (
  <>
    <h1 id='box' title='你好'>
      hello word
    </h1>
    <p className='test' htmlFor>
      哈哈哈
    </p>
  </>
);

ReactDom.render(el, document.getElementById('root'));
