import React from 'react';
import reactDom from 'react-dom';

/*
   事件处理程序中this指向问题解决:
       方案1:箭头函数
       方案2:bind修改this指向
       方案3:类实例方法

*/
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '123',
    };
  }
  render() {
    //1.在render函数中,this是没有问题的,this指向当前组件
    console.log('this====>render', this);
    return (
      <div>
        state:{this.state.msg}
        <hr />
        <button onClick={this.handleClick}>点击</button>
        <hr />
        {/* 方案1:箭头函数将事件处理函数包裹起来 */}
        <button
          onClick={() => {
            console.log('箭头函数中的this', this);
            this.handleClickThis('testarrow');
          }}
        >
          this指向处理:箭头函数
        </button>
        <hr />
        {/* 方案2:把handleclick中的this绑定为render中的this,第二个参数可以传参 */}
        <button onClick={this.handleBind.bind(this, 'testbind')}>this指向处理:bind修改this指向</button>
        <hr />
        <button onClick={this.handleClick2}>this指向处理:类实例方法</button>
      </div>
    );
  }
  handleClick() {
    //2.事件处理程序中的this有问题,指向undefined
    console.log('事件函数中this===》', this); // undefined
  }
  handleClickThis(type) {
    console.log('事件函数中this===》箭头函数处理', this, type); // undefined
  }
  handleBind(type) {
    console.log('事件函数中this===》bind修改this指向', this, type);
  }
  //方案3:类实例方法  优点:代码解决   缺点:无法传参
  handleClick2 = () => {
    console.log('事件函数中this===》类实例方法', this);
  };
}

reactDom.render(<Demo />, document.getElementById('root'));
