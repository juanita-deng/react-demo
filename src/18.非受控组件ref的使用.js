import React from 'react';
import reactDom from 'react-dom';

/**
 * 非受控组件,借助ref(vue中用$refs),使用原生dom的方式获取表单元素的值
 *    使用步骤:
 *           (1)在constructor构造函数中调用React.createRef()方法创建一个ref
 *           (2)给某个dom对象绑定ref
 *           (3)通过ref.current属性就能获取到当前的dom对象
 */
class Hello extends React.Component {
  render() {
    return <div>我是hello组件</div>;
  }
  validate() {
    console.log('我是hello组件的validate方法');
  }
}
class Demo extends React.Component {
  constructor() {
    super();
    //(1)在constructor构造函数中调用React.createRef()方法创建一个ref
    this.inpRef = React.createRef();
    this.helRef = React.createRef();
  }
  render() {
    return (
      <div>
        <h1>react案例--非受控组件多个表单元素</h1>
        <hr />
        {/* (2)给某个dom对象绑定ref  */}
        <input type='text' ref={this.inpRef} />
        <button onClick={this.handleClick}>获取input的值</button>
        <Hello ref={this.helRef} />
      </div>
    );
  }
  handleClick = () => {
    // console.log('e', e);
    this.inpRef.current.focus();
    this.helRef.current.validate();
    console.log(this.inpRef.current.value); // (3)通过ref.current属性就能获取到当前的dom对象
  };
}

reactDom.render(<Demo />, document.getElementById('root'));
