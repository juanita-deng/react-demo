import React from 'react';
import reactDom from 'react-dom';
import './19.demo.css';
import CommentList from './25.components/comment-list';
import Comment from './25.components/comment';
/**
 * 功能点:1.list列表的展示(组件拆分,组件通讯)
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
      commonList: [], // { id: 1, name: '刘德华', content: '冰雨' }
    };
  }
  render() {
    return (
      <div className='app'>
        <Comment getNewList={this.getNewList.bind(this)} clearList={this.handleClear.bind(this)} />
        <CommentList commonList={this.state.commonList} delList={this.handleDel.bind(this)} />
      </div>
    );
  }
  componentDidMount() {
    const localList = JSON.parse(localStorage.getItem('localList')) || [];
    this.setState({
      commonList: localList,
    });
  }
  //接收子组件comment传递过来的需要新增的数据,然后新增过后通过props方式传递给另一个子组件commentlist
  //添加(发表评论)
  getNewList(news) {
    console.log('news', news);
    this.setState(
      {
        commonList: [news, ...this.state.commonList],
      },
      // setstate中第二个参数可以动态获取到state的值
      () => {
        localStorage.setItem('localList', JSON.stringify([...this.state.commonList]));
      },
    );
  }
  //删除
  handleDel(id) {
    this.setState(
      {
        commonList: this.state.commonList.filter((v) => v.id !== id),
      },
      () => {
        localStorage.setItem('localList', JSON.stringify([...this.state.commonList]));
      },
    );
  }
  //清空
  handleClear() {
    this.setState({ commonList: [] }, () => {
      localStorage.setItem('localList', JSON.stringify([]));
    });
  }
}
reactDom.render(<Demo />, document.getElementById('root'));
