import React from 'react';
import reactDom from 'react-dom';
import PropTypes from 'prop-types';
/**
 * props校验(propsType的使用步骤)
 *    1.安装prop-types的包(yarn add prop-types/npm i props-types)
 *    2.导入这个包
 *    3.组件名.propTypes = {} 指定校验(注意“此处是propTypes,小写)
 *
 */

//小明封装的组件
class Demo extends React.Component {
  render() {
    console.log(90, this.props);
    return (
      <ul>
        {this.props.data.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    );
  }
}
Demo.propTypes = {
  //校验规则是必传的数组类型
  data: PropTypes.array.isRequired,
};

//小红使用小明封装的组件
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Demo data={[1, 3, 'juanita']}></Demo> */}
        <Demo data={{ name: 'juanita' }}></Demo>
      </div>
    );
  }
}

reactDom.render(<App />, document.getElementById('root'));
