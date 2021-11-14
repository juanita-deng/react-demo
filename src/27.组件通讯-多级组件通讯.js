import React from 'react';
import reactDom from 'react-dom';
/**
 * 兄弟组件通讯
 *    需求:jack组件对rose组件通讯
 *        1.把状态提升到父组件
 *        2.父组件把msg传递给rose组件
 */
class Fahter extends React.Component {
  constructor() {
    super();
    this.state = {
      themeColor: 'red',
    };
  }
  render() {
    const { themeColor } = this.state;
    return (
      <div>
        <h1>我是根组件(父组件)</h1>
        <Son themeColor={themeColor} />
        <hr />
      </div>
    );
  }
}

class Son extends React.Component {
  render() {
    return (
      <div>
        <h3>我是Son组件</h3>
        <hr />
        <Sun themeColor={this.props.themeColor}></Sun>
      </div>
    );
  }
}

class Sun extends React.Component {
  render() {
    const { themeColor } = this.props;
    return (
      <div style={{ color: themeColor }}>
        <h3>我是Sun组件</h3>
        接收到修改的主题色是:{themeColor}
      </div>
    );
  }
}
reactDom.render(<Fahter />, document.getElementById('root'));
