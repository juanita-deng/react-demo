import React from 'react';
import reactDom from 'react-dom';
/**
 * 多级组件通讯- consumer/provider使用
 *        1.通过React.createContext创建context,得到provider(提供者)和consumer(消费者)
 *        2.用provider包裹住父组件的内容,需要给provider提供value属性
 *        3.在后台层级的组件中,调用consumer组件接收数据(注意要使用箭头函数)
 *
 *  总结:
 *     1.如果两个组件是远方亲戚,比如嵌套多层,可以使用Context实现组件通讯
 *     2.Context提供了两个组件:Provider和Consumer
 *     3.Provider组件:用来提供数据(可以有多个)
 *     4.Consumer组件:用来消费数据(可以有多个)
 *     5.如有多个Provider,consumer会就近消费最近的那个provider提供的数据
 *
 */

const { Consumer, Provider } = React.createContext();
class Fahter extends React.Component {
  constructor() {
    super();
    this.state = {
      themeColor: 'pink',
    };
  }
  render() {
    const { themeColor } = this.state;
    return (
      <Provider value={themeColor}>
        <div>
          <h1>我是根组件(父组件)</h1>
          <Son />
          <hr />
        </div>
      </Provider>
    );
  }
}

class Son extends React.Component {
  state = {
    sonColor: 'skyblue',
  };
  render() {
    return (
      // 就近消费上一级Father的数据
      <Consumer>
        {(value) => (
          <Provider value={this.state.sonColor}>
            <div style={{ color: value }}>
              <h3>我是Son组件,接收的consumer颜色是:{value}</h3>
              <hr />
              <Sun></Sun>
            </div>
          </Provider>
        )}
      </Consumer>

      //   就近消费自己的数据
      //   <Provider value={this.state.sonColor}>
      //     <Consumer>
      //       {(value) => (
      //         <div style={{ color: value }}>
      //           <h3>我是Son组件,接收的consumer颜色是:{value}</h3>
      //           <hr />
      //           <Sun></Sun>
      //         </div>
      //       )}
      //     </Consumer>
      //   </Provider>
    );
  }
}

class Sun extends React.Component {
  render() {
    return (
      // 就近消费Son组件的数据
      <Consumer>
        {(value) => {
          return (
            <div style={{ color: value }}>
              <h3>我是Sun组件</h3>
              接收到修改的主题色是:{value}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
reactDom.render(<Fahter />, document.getElementById('root'));
