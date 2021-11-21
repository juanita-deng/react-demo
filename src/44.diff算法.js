import React from 'react';
import ReactDom from 'react-dom';

/**
*  Diff算法:
  
      key影响的是虚拟dom中diff算法的对比:(就地复用原则)
         1.diff算法默认是从父元素开始比,父元素如果不同,直接不复用
         2.如果父元素相同,默认开始比较子元素,根据数组的下标来比较,如果有key,根据key进行比较
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Diff算法</h1>
      </div>
    );
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
