import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
/**
 *  React路由基本使用基本步骤:
 *      1.安装react-router-dom包
 *      2.react-router-dom包 会提供很多的组件(导入三个核心组件)
 *      3.HashRouter组件,包裹整个路由对象,一个项目中只有一个router,使用这个HashRouter包裹项目的根组件
 *      4.Link组件会渲染成a链接
 *      5.Route组件用于配置路由规则,一个route可以配置一条规则,route还代表了路由的出口
 */
const Home = () => <div>我是home组件</div>;
const User = () => <div>我是user组件</div>;
const Login = () => <div>我是login组件</div>;
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React路由基本使用基本步骤</h1>
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
          {/*
           * 一个route可以配置一条规则,指定path和element,如果组件匹配了,就会渲染到这
           *         注意:1.新版本多个出口需要添加 <Routes></Routes>包裹Route组件
           *              2.Route需要配置path和element,而不是之前的path和component  老版本会报错
           * import Home from './Home'
           * 老版本
           * <Route path="/home" component={ Home } />
           * 新版本
           * <Route path="/home" element={ <Home/> } />
           */}
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

//HashRouter组件,包裹整个路由对象
ReactDom.render(
  <HashRouter>
    <App></App>
  </HashRouter>,
  document.getElementById('root'),
);
