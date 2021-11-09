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
      </div>
    );
  }
}

reactDom.render(<Demo />, document.getElementById('root'));
