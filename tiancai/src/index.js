import React from 'react';
import ReactDOM from 'react-dom';


//classnames库
import classnames from 'classnames'

//状态管理
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
//引入路由
import { HashRouter as Router, Route} from "react-router-dom";
//使用withRouter
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import './index.css';
import './assets/common.css';
import './assets/index.css';
import * as serviceWorker from './serviceWorker';
//引入页面组件
import Home from './pages/Home/Home.jsx';
import Lend from './pages/Lend/Lend.jsx';
import Sign from './pages/Sign/Sign.jsx';
import Service from './pages/Service/Service.jsx';
import Mine from './pages/Mine/Mine.jsx';

import Footer from './containers/Footer/Footer.jsx'
//axio
import axios from 'axios';
React.axios = axios
//创建仓库
const store = createStore(function(state = {
  	tab_l:false,
    sign_s:false,
    sign_t:true,
    sign_p:true,
    qiandao:true
}, action) {
  		switch(action.type){
  			case 'toggleTab':
  			return {
            ...state,
            tab_l:action.tab_l
        }
        case 'toggleSign':
  			return {
            ...state,
            sign_s:action.sign_s,
            sign_t:action.sign_t,
            qiandao:action.qiandao
        }
  			default:
        	return state          
  		}
  }
);


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
			 	<Route path="/home/"  component={Home} />
			 	<Route path="/Lend/"  component={Lend} />
		      	<Route path="/Sign/"  component={Sign} />
				<Route path="/service" component={Service} />
				<Route path="/mine" component={Mine} />
				<Footer />
			</div>
		</Router>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
