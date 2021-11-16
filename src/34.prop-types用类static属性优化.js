import React from 'react';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';
/**
 * props设置默认值
 *    组件名.defaultProps = {}
 * 
 * 优化后:直接放在类中,然后加上关键字static
 * 原理:类的静态属性static
 *    实例成员:属性和方法是添加给实例对象的(实例对象的属性,实例对象的方法)  例如:$('div').addClass()实例方法
 *    静态成员:属性和方法是添加给类本身的,不是添加给实例的   例如:$.ajax
 *    优化后写法:
 *        static defaultProps = {}
 *        static propTypes = {}
 */

class App extends React.Component {
  //写法二(利用class类的实例)
  static propTypes = {
    money: PropTypes.shape({// 特定结构的对象的校验
      money: PropTypes.number,
      name: PropTypes.string,
    }),
  };
  //props设置默认值
  static defaultProps = {
    money:{
      money:100,
      name:'juanita'
    }
  }
  render() {
    console.log('props===>',this.props)
    return (
      <div>
        <h1>我是根组件</h1>
      </div>
    );
  }
}

//写法一
// App.propTypes = {
//   money: PropTypes.shape({// 特定结构的对象的校验
//     money: PropTypes.number,
//     name: PropTypes.string,
//   }),
// };

//props设置默认值
// App.defaultProps = {
//   money:{
//     money:100,
//     name:'juanita'
//   }
// }


reactDom.render(<App></App>, document.getElementById('root'));
