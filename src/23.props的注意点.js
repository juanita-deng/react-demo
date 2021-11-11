import React from 'react';
import ReactDOM from 'react-dom';

/**
 *  props的特点:
 *     1.可以给组件传递任意类型的数据
 *     2.props是只读的,不允许修改props的数据
 *     3.注意:在类组件constructor中使用的时候,需要把props传递给super(),否则构造函数无法获取到props
 */

class Demo extends React.Component {
  // 3.注意:在类组件constructor中使用的时候,需要把props传递给super(),否则构造函数无法获取到props
  constructor(props) {
    super(props);
    this.state = {
      moneyState: props.obj.money,
    };

    console.log('state', this.state);
    console.log('props', this.props);
  }
  render() {
    const {
      obj: { money, car },
      el,
      list,
    } = this.props;
    return (
      <div>
        <h3>类组件的props</h3>
        <div>存款:{money}</div>
        <div>车子:{car}</div>
        <div>jsx:{el}</div>
        <div>数组:{list}</div>
        <button onClick={this.handleClick}>尝试修改props</button>
      </div>
    );
  }
  /**
   * 2.props是只读的,不允许修改props的数据
   *     对于state中的属性,需要用setstate去修改
   *     对于props中的属性,直接就是不能改(否则报错,或者不生效)
   */
  handleClick = () => {
    this.props.list = []; //报错 Cannot assign to read only property 'list' of object '
  };
}

//1.可以给组件传递任意类型的数据(布尔值,对象,数组,jsx...)
const obj = {
  money: 100,
  car: '玛莎拉蒂',
};
const el = <a href='http://baidu.com'>百度一下</a>;
const list = [1, 2, 3];
ReactDOM.render(<Demo obj={obj} isSingle={true} el={el} list={list} />, document.getElementById('root'));
