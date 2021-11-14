import React from 'react';
import reactDom from 'react-dom';
/**   children属性
 *      1.children是props中一个比较特殊的属性,用于表示组件标签内部的子节点(类似vue中的插槽)
 *      2.这个children可以是任意类型的值(文本,react元素,组件,甚至是函数)
 *      3.children属性和普通的props是一样,不一样的地方是除了传递属性,还可以放在标签中间
 */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      themeColor: 'pink',
    };
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h1>我是根组件</h1>
        <div>
          子节点是:{this.props.children()}--{this.props.aa}
        </div>
        <hr />
      </div>
    );
  }
}

// reactDom.render(<App>123</App>, document.getElementById('root'));
reactDom.render(
  <App aa='juanita'>
    {function test() {
      console.log('test', 123);
      return <div>函数test调用</div>;
    }}
  </App>,
  document.getElementById('root'),
);
