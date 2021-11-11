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
          <input name='username' value={this.state.username} onChange={this.handleChange} />
        </div>
        <div>
          <textarea cols='30' rows='10' name='desc' value={this.state.desc} onChange={this.handleChange}></textarea>
        </div>
        <div>
          <select name='city' onChange={this.handleChange}>
            <option value='1'>上海</option>
            <option value='2'>北京</option>
            <option value='3'> 深圳</option>
          </select>
        </div>
        <div>
          是否单身:
          <input type='checkbox' name='isSingle' checked={this.state.isSingle} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
  handleChange = (e) => {
    // console.log('type===>', type);
    // console.log('e====>', e);
    //简写到一个函数 利用对象的方括号语法
    const { name, checked, value } = e.target;
    this.setState({
      [name]: name === 'isSingle' ? checked : value,
    });
  };
  //   handleDesc = (e) => {
  //     this.setState({
  //       desc: e.target.value,
  //     });
  //   };
  //   hanleCity = (e) => {
  //     this.setState({
  //       city: e.target.value,
  //     });
  //   };
  //   handleIssingle = (e) => {
  //     this.setState({
  //       isSingle: e.target.checked,
  //     });
  //   };
}
reactDom.render(<Demo />, document.getElementById('root'));
