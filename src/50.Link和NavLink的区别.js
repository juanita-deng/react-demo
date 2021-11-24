import React from 'react';
import ReactDom from 'react-dom';
// as 是取名称为 ...,好处:后期如果需要改为其他模式的路由,仅改此处即可
import { HashRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './50.css';
/**
 *  Link和NavLink的区别:
 *      1.Link只会渲染成a链接
 *      2.NavLink不仅会渲染成a链接,还会给匹配的链接添加active类名 (active是模糊匹配的,比如to=‘/’,会匹配所有带'/'开头的路由)
 *          activeClassName 修改默认的active类名
 *          activeStyle 激活的行内样式
 *          exact 精确匹配,默认是模糊匹配
 */
const Home = () => <div>我是home组件</div>;
const User = () => <div>我是user组件</div>;
const Login = () => <div>我是login组件</div>;
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Link和NavLink的区别:</h1>
        <ul>
          <li>
            <NavLink to='/'>首页</NavLink>
          </li>
          <li>
            <NavLink to='/user'>用户</NavLink>
          </li>
          <li>
            <NavLink to='/login'>登录</NavLink>
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
