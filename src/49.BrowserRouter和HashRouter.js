import React from 'react';
import ReactDom from 'react-dom';
// as 是取名称为 ...,好处:后期如果需要改为其他模式的路由,仅改此处即可
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
/**
 *  React两种路由模式:
 *      1.HashRouter:基于锚点实现,地址栏中带有 # #/home #/login
 *      2.BrowserRouter:基于H5的history API实现,地址栏中不需要带 # ,上线的时候,需要后台的额外处理
 *
 */
const Home = () => <div>我是home组件</div>;
const User = () => <div>我是user组件</div>;
const Login = () => <div>我是login组件</div>;
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React两种路由模式</h1>
        <ul>
          <li>
            <Link to='/home'>首页</Link>
          </li>
          <li>
            <Link to='/user'>用户</Link>
          </li>
          <li>
            <Link to='/login'>登录</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path='/home' element={<Home></Home>}>
            首页
          </Route>
          <Route path='/user' element={<User></User>}>
            用户
          </Route>
          <Route path='/login' element={<Login></Login>}>
            登录
          </Route>
        </Routes>
      </div>
    );
  }
}

ReactDom.render(
  // 路由名称统一改为Router
  <Router>
    <App></App>
  </Router>,
  document.getElementById('root'),
);
