import React from 'react';
import reactDom from 'react-dom';
import './30.props-children.css';

/**
 * props校验
 *    目的:校验接收的props的数据类型,增加组件的健壮性
 */

//封装一个头部组件
class HmHeader extends React.Component {
  render() {
    return <div className='header'>{this.props.children}</div>;
  }
}

const elemnet = (
  <div>
    <HmHeader>个人中心</HmHeader>
    <HmHeader children={'收藏中心'}></HmHeader>
  </div>
);

reactDom.render(elemnet, document.getElementById('root'));
