import React from 'react';
import PropTypes from 'prop-types';
/**
 *  作为复用逻辑的功能组件
 */

class Mouse extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };
  state = {
    x: 0,
    y: 0,
  };
  render() {
    return <div>{this.props.children(this.state)}</div>;
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMove);
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMove);
  }
  handleMove = (e) => {
    this.setState({
      x: e.pageX,
      y: e.pageY,
    });
  };
}
export default Mouse;
