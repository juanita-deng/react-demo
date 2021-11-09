import React from 'react';
import reactDom from 'react-dom';

class Demo extends React.Component {
  state = {
    username: 'juanita',
    desc: '我是一个热爱生活的girl',
    city: '1',
    isSingle: true,
  };
  render() {
    return (
      <div>
        <h1>react案例--受控组件多个表单元素</h1>
        <hr />
        <div>
          <input value={this.state.username} onChange={this.handleChange} />
        </div>
        <div>
          <textarea cols='30' rows='10' value={this.state.desc} onChange={this.handleDesc}></textarea>
        </div>
        <div>
          <select onChange={this.hanleCity}>
            <option value='1'>上海</option>
            <option value='2'>北京</option>
            <option value='3'> 深圳</option>
          </select>
        </div>
        <div>
          是否单身:
          <input type='checkbox' checked={this.state.isSingle} onChange={this.handleIssingle} />
        </div>
      </div>
    );
  }
  handleChange = (e) => {
    console.log('e====>', e);
    this.setState({
      username: e.target.value,
    });
  };
  handleDesc = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };
  hanleCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  handleIssingle = (e) => {
    this.setState({
      isSingle: e.target.checked,
    });
  };
}
reactDom.render(<Demo />, document.getElementById('root'));
