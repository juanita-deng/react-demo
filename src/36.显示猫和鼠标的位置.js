import React from 'react';
import ReactDOM from 'react-dom';
import catImg from './img/cat.webp';
/**
 *  显示当前鼠标的位置信息
 *     1.react加载图片,src不能是一个字符串
 *     2.react加载图片,需要单独加载 (import .. form ..,网络图片除外)
 */

class Demo extends React.Component {
  state = {
    position: {
      x: 0,
      y: 0,
    },
  };
  render() {
    const {
      position: { y, x },
    } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <h1>显示当前鼠标的位置信息</h1>
        <div>
          鼠标的位置是:x:{x},y:{y}
          <img
            src={catImg}
            // src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20191012%2F12%2F1570852977-UHFOusZNVX.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639880086&t=3797f1b60ca230b6ae8e75d07b72e48a'
            style={{ width: '100px', height: '100px', borderRadius: '50%', position: 'absolute', left: `${x - 50}px`, top: `${y - 50}px` }}
            alt=''
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMose);
  }
  handleMose = (e) => {
    const position = { x: e.pageX, y: e.pageY };
    this.setState({
      position,
    });
  };
}

ReactDOM.render(<Demo />, document.getElementById('root'));
