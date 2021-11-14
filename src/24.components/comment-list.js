import React from 'react';

class CommentList extends React.Component {
  render() {
    const { commonList } = this.props;
    if (commonList.length > 0) {
      return (
        <ul>
          {this.props.commonList.map((v) => {
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

  //删除功能  将需要删除的对象传递给父组件进行修改
  handleDel(id) {
    this.props.delList(id);
  }
}

export default CommentList;
