import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 */

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1>组件的生命周期</h1>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
