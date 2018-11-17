import React from 'react';
import ReactDOM from 'react-dom';
//引入路由
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//引入页面组件
import Home from './pages/Home/Home.jsx';

ReactDOM.render(
	<Router>
		<div>
		 	<Route path="/home/"  component={Home} />
	      	
		</div>
	</Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
