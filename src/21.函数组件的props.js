import React from 'react';
import ReactDOM from 'react-dom';

/**  函数组件不能拥有自己的数据,但是可以接受别人传递过来的数据
 *     函数组件的props
 *         1.传递数据:在组件的标签上提供数据即可(注意:除字符串类型,其他类型数据都要在{}中提供)
 *         2.接收数据:函数组件通过参数props接收数据
 *         3.props也可以直接解构
 */
// function Demo(props){
//   console.log('props',props)
//   return <div>
//     <h3>函数组件的props</h3>
//     <div>存款:{props.money}</div>
//     <div>车子:{props.car}</div>
//   </div>
// }

// 3.props也可以直接解构
function Demo({ money, car }) {
  return (
    <div>
      <h3>函数组件的props</h3>
      <div>存款:{money}</div>
      <div>车子:{car}</div>
    </div>
  );
}

ReactDOM.render(<Demo money={100} car='玛莎拉蒂' isSingle={true} />, document.getElementById('root'));
