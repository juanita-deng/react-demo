import React from 'react';
import ReactDOM from 'react-dom';

/**  类组件的props
 *         1.传递数据:在组件的标签上提供数据即可
 *         2.接收数据:函数组件通过参数props接收数据
 *         3.props也可以直接解构
 */

class Demo extends React.Component {
  render() {
    const { money, car } = this.props;
    return (
      <div>
        <h3>类组件的props</h3>
        <div>存款:{money}</div>
        <div>车子:{car}</div>
      </div>
    );
  }
}

ReactDOM.render(<Demo money={100} car='玛莎拉蒂' isSingle={true} />, document.getElementById('root'));
