import React from 'react';
import ReactDom from 'react-dom';
// as 是取名称为 ...,好处:后期如果需要改为其他模式的路由,仅改此处即可
import { HashRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './50.css';
/**   react中如何配置嵌套子路由
 *    参考官网:https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6
 *    v5     1.react中只需要给某个子组件使用Route继续配置规则即可   /user
 *           2.子路有的path中必须包含父路由的path   /user/add
 *    v6     父组件中需要添加 /*  
 *           子组件中直接写路由名称即可 add
 *
 */
const Login = () => <div>我是login组件</div>;
const Error = () => <div>你要的页面找不到</div>;
const Add = () => <div>我是用户添加页面</div>;
const Edit = () => <div>我是用户编辑页面</div>
const Home = () => <div>我是home组件</div>;
const User = () => {
  return (
    <div>
      我是user组件
      <Routes>
        <Route path='add' element={<Add></Add>}></Route>
        <Route path=':id' element={<Edit></Edit>}></Route>
      </Routes>
    </div>
  );
};
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React嵌套子路由</h1>
        <ul>
          <li>
            <NavLink to='/' exact='true'>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/user'>用户</NavLink>
            <ul>
              <li>
                <NavLink to='/user/add'>用户添加</NavLink>
              </li>
              <li>
                <NavLink to='/user/id'>用户编辑</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to='/login'>登录</NavLink>
          </li>
        </ul>
        <hr />
        <Routes>
          {/* 路由匹配规则默认是模糊匹配,exact精确匹配 */}
          <Route path='/' exact element={<Home></Home>}>
            首页
          </Route>
          <Route path='/user/*' exact element={<User></User>}>
            用户
          </Route>
          <Route path='/login' element={<Login></Login>}>
            登录
          </Route>
          <Route element={<Error></Error>}></Route>
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
