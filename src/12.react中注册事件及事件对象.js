import React from 'react';
import reactDom from 'react-dom';

/*
   react中注册事件
      1.注册事件 on+事件名 驼峰命名  onClick = {this.xxx}
      2.在类中提供事件处理函数
*/
class Hello extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick} onMouseOver={this.handleMouse}>
          点击打印
        </button>
        <a href='http://www.baidu.com' onClick={this.handlePrevent}>
          {' '}
          百度一下
        </a>
      </div>
    );
  }
  handleClick() {
    console.log('哈哈哈');
  }
  handleMouse() {
    console.log('嘻嘻嘻');
  }
  //事件对象:react中的事件对象叫做合成事件(对象)
  handlePrevent(e) {
    e.preventDefault(); //阻止浏览器的默认行为
    e.stopPropagation(); //阻止冒泡
    console.log('事件对象===>', e);
  }
}

reactDom.render(<Hello />, document.getElementById('root'));
