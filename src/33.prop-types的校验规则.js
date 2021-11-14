import React from 'react';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';
/**
 * propsType的校验规则
 *    1.常见类型:array,bool,func,number,object,string
 *    2.react元素类型:element
 *    3.必填项:isRequired
 *    4.特定结构的对象:shape({})
 */

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
      </div>
    );
  }
}
App.propTypes = {
  //   money: PropTypes.func, //函数类型校验
  //   money: PropTypes.element, //jsx类型校验
  money: PropTypes.shape({
    // 特定结构的对象的校验
    money: PropTypes.number,
    name: PropTypes.string,
  }),
};

// reactDom.render(<App money={() => {}}></App>, document.getElementById('root'));
// reactDom.render(<App money={<div>123</div>}></App>, document.getElementById('root'));
reactDom.render(<App money={{ name: 123, money: '345' }}></App>, document.getElementById('root'));
