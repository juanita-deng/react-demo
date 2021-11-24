import React from 'react';
import ReactDom from 'react-dom';
// as 是取名称为 ...,好处:后期如果需要改为其他模式的路由,仅改此处即可
import { HashRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './50.css';
/** react-router-dom v6以后版本没有此问题,v6以前有Switch组件
 *  v5 版本  Route组件,switch和404
 *    switch包裹route组件,优先匹配有路由的页面,没有路由的就可以用error或者404页面
 *    注意:path不写,会匹配所有的路径,类似‘/’
 *    function App() {
        return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
            </Switch>
          </BrowserRouter>
        );
      }
 *      
 */
const Home = () => <div>我是home组件</div>;
const User = () => <div>我是user组件</div>;
const Login = () => <div>我是login组件</div>;
const Error = () => <div>你要的页面找不到</div>;
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React两种路由模式</h1>
        <ul>
          <li>
            <NavLink to='/' exact='true'>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/user'>用户</NavLink>
          </li>
          <li>
            <NavLink to='/login'>登录</NavLink>
          </li>
        </ul>
        <hr />
        {/* <Switch> */}
        <Routes>
          {/* 路由匹配规则默认是模糊匹配,exact精确匹配 */}
          <Route path='/' exact element={<Home></Home>}>
            首页
          </Route>
          <Route path='/user' element={<User></User>}>
            用户
          </Route>
          <Route path='/login' element={<Login></Login>}>
            登录
          </Route>
          <Route element={<Error></Error>}></Route>
        </Routes>
        {/* </Switch> */}
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
