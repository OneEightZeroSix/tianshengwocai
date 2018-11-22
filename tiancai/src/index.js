import React from 'react';
import ReactDOM from 'react-dom';


//classnames库
// import classnames from 'classnames'

//状态管理
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//引入路由
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
//使用withRouter
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";

import './index.css';
import './assets/common.css';
import './assets/index.css';
import * as serviceWorker from './serviceWorker';
//引入页面组件
import Talent from './pages/Talent/Talent.jsx';
import Sign from './pages/Sign/Sign.jsx';
import About from './pages/About/About.jsx';

//axio
import axios from 'axios';
React.axios = axios
//创建仓库
const store = createStore(function (state = {
	tab_l: false,
	sign_s: false,
	sign_t: true,
	sign_p: true,
	qiandao: true,
	isSign:"false"
	
}, action) {
	var cookies = document.cookie;
	if(cookies!=""){
		return {
			...state,
			isSign:"true"
		}
	}
	switch (action.type) {
		case 'toggleTab':
			return {
				...state,
				tab_l: action.tab_l
			}
		case 'toggleSign':
			return {
				...state,
				sign_s: action.sign_s,
				sign_t: action.sign_t,
				qiandao: action.qiandao
			}
		case 'setNav':
			return {
				...state,
				footNav:action.footNav
			}
		case 'cookieState':
			return {
				...state,
				isSign:action.isSign
			}
		default:
			return state
	}
}
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
				<Switch>
					<Route path='/talent' component={Talent} />
					<Route path="/sign" component={Sign} />
					<Route path='/about' component={About} />
					<Redirect from="/" to="/talent/home" />
					{/* <Route path="/" render={()=><Redirect to="/home" />} /> */}
				</Switch>
		</Router>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
