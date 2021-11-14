import React from 'react';
import reactDom from 'react-dom';
import './19.demo.css';
/**
 * 功能点:1.list列表的展示
 *       2.列表的条件渲染
 *       3.清空功能
 *       4.添加功能(受控组价,setstate修改状态staten中添加一个对象,非空判断,清空输入内容)
 *       5.删除功能(setstate修改状态staten中删除一个对象)
 *       6.本地缓存功能
 */
class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      commoner: '',
      commonContent: '',
      commonList: [], // { id: 1, name: '刘德华', content: '冰雨' }
    };
  }
  render() {
    return (
      <div className='app'>
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
        {this.renderList()}
      </div>
    );
  }
  componentDidMount() {
    const localList = JSON.parse(localStorage.getItem('localList')) || [];
    this.setState({
      commonList: localList,
    });
    // console.log('localList', localList);
  }
  //注意:此时是render渲染,没有this指向问题
  renderList() {
    if (this.state.commonList.length > 0) {
      return (
        <ul>
          {this.state.commonList.map((v) => {
            return (
              <li key={v.id || v}>
                <h3>评论人:{v.name}</h3>
                <p>评论内容:{v.content}</p>
                <button onClick={this.handleDel.bind(this, v.id)}>删除</button>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div className='no-comment'>暂无更多数据</div>;
    }
  }
  //删除功能  往state中删除一个对象
  handleDel(id) {
    // console.log('item', item);
    this.setState(
      {
        commonList: this.state.commonList.filter((v) => v.id !== id)
      },
      () => {
        localStorage.setItem('localList', JSON.stringify([...this.state.commonList]));
      },
    );
  }
  //受控组价受控
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  //清空功能
  handleClear = () => {
    this.setState({ commonList: [] });
  };
  //添加功能  往state中添加一个对象
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
    //   this.state.commonList.unshift(newList);// 不能直接修改state
    // 往state中添加一个对象
    this.setState(
      {
        commonList: [newList, ...this.state.commonList],
        commoner: '',
        commonContent: '',
      },
      // setstate中第二个参数可以动态获取到state的值
      () => {
        localStorage.setItem('localList', JSON.stringify([...this.state.commonList]));
      },
    );
  };
  //键盘按键事件
  handleKeyDown = (e) => {
    // console.log('e', e);
    if (e.keyCode !== 13) return;
    this.handleAdd();
  };
}
reactDom.render(<Demo />, document.getElementById('root'));
