import React from 'react';
import ReactDom from 'react-dom';

/**
*   组件更新机制
*      setState()的两个作用:1.修改state的值 2.更新组件UI
                      过程:父组件渲染时,也会渲染子组件,但只会渲染当前组件子树(当前组件及当前组件的所有子组件)
*/

class App extends React.Component {
  state = {
    count: 0,
  };
  render() {
    console.log('App render');
    return (
      <div>
        <h1>组件更新机制</h1>
        <div>app组件</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          修改app的state
        </button>
        <hr />
        <Parent1></Parent1>
        <hr />
        <Parent2></Parent2>
      </div>
    );
  }
}

class Parent1 extends React.Component {
  state = {
    count: 0,
  };
  render() {
    console.log('Parent1 render');
    return (
      <div>
        <div>Parent1组件</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          修改Parent1的state
        </button>
        <Child1></Child1>
        <Child2></Child2>
      </div>
    );
  }
}

class Parent2 extends React.Component {
  render() {
    console.log('Parent2 render');
    return (
      <div>
        <div>Parent2组件</div>
        <Child3></Child3>
        <Child4></Child4>
      </div>
    );
  }
}

class Child1 extends React.Component {
  render() {
    console.log('Child1 render');

    return (
      <div>
        <div>Child1组件</div>
      </div>
    );
  }
}

class Child2 extends React.Component {
  render() {
    console.log('Child2 render');

    return (
      <div>
        <div>Child2组件</div>
      </div>
    );
  }
}

class Child3 extends React.Component {
  render() {
    console.log('Child3 render');

    return (
      <div>
        <div>Child3组件</div>
      </div>
    );
  }
}

class Child4 extends React.Component {
  render() {
    console.log('Child3 render');

    return (
      <div>
        <div>Child4组件</div>
      </div>
    );
  }
}

ReactDom.render(<App></App>, document.getElementById('root'));
