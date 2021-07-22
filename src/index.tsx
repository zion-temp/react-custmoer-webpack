import React,{FC,Suspense} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route ,Redirect,Link} from 'react-router-dom'
import "@/index.less";

// import Home from "./components/home/index";
// import About from "./components/about/index"
import homeStore from './store'
import {Provider} from 'mobx-react'
const Home = React.lazy(() => import('./components/home/index'));
const About = React.lazy(() => import('./components/about/index'));
const App:FC = () => {
    return <>
            <HashRouter>
                <Link to="/">首页</Link>
                <Link to="/about">关于我们</Link>
                <Switch>
                	<Redirect exact from='/' to='/home' />
                        <Suspense fallback={<div>加载中...</div>}>
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                        </Suspense>
                </Switch>
            </HashRouter>
    
    </>
    
    
    
    
};


ReactDOM.render(<Provider {...homeStore}><App /></Provider>, document.getElementById("root"));
