import React from 'react';

class Comment extends React.Component {
  state = {
    commoner: '',
    commonContent: '',
  };
  render() {
    return (
      <div>
        <input name='commoner' type='text' className='user' value={this.state.commoner} onChange={this.handleChange} placeholder='请输入评论人' />
        <br />
        <textarea
          name='commonContent'
          className='content'
          value={this.state.commonContent}
          onChange={this.handleChange}
          placeholder='请输入评论内容'
          onKeyDown={this.handleKeyDown}
          id=''
          cols='30'
          rows='10'
        ></textarea>
        <br />
        <button onClick={this.handleAdd}>发表评论</button>
        <button onClick={this.handleClear}>清空评论</button>
      </div>
    );
  }
  //受控组价受控
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  //键盘按键事件
  handleKeyDown = (e) => {
    // console.log('e', e);
    if (e.keyCode !== 13) return;
    this.handleAdd();
  };
  //清空功能
  handleClear = () => {
    this.props.clearList();
  };
  //添加功能  往state中添加一个对象(子传父)
  handleAdd = () => {
    if (!this.state.commoner.trim() || !this.state.commonContent.trim()) {
      alert('请不要输入空值');
      return;
    }
    const newList = {
      id: Date.now(),
      name: this.state.commoner,
      content: this.state.commonContent,
    };
    this.props.getNewList(newList);
    // 往state中添加一个对象
    //将需要新增的评论列表传递给父组件,然后通过父组件传递给兄弟组件进行更新dom
    this.setState({
      commoner: '',
      commonContent: '',
    });
  };
}

export default Comment;
