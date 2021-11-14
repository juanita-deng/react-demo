import React from 'react';
import reactDom from 'react-dom';
/**
 *
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
reactDom.render(<App></App>, document.getElementById('root'));
