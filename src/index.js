import React from 'react';
import ReactDom from 'react-dom';

/**
 *
 */

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>123</h1>
      </div>
    );
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
