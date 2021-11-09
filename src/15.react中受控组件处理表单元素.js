import React from 'react';
import reactDom from 'react-dom';

/**
 *  受控组件:value值受到了react控制的表单元素
 *      步骤:
 *          1.给文本框提供value属性,value = {this.state.username}  这个文本框受到了react的username属性的控制
 *          2.给文本框提供一个onchange方法 在onchange中去修改username的值
 */
class Demo extends React.Component {
  state = {
    username: 'juanita',
  };
  render() {
    return (
      <div>
        <h1>react案例--受控组件</h1>
        <hr />
        <input value={this.state.username} onChange={this.handleChange} />
      </div>
    );
  }
  handleChange = (e) => {
    console.log('e====>', e);
    this.setState({
      username: e.target.value,
    });
  };
}
reactDom.render(<Demo />, document.getElementById('root'));
