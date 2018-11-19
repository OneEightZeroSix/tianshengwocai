import React from 'react';
import ReactDOM from 'react-dom';
//引入路由
import { HashRouter as Router, Route} from "react-router-dom";

import './index.css';
import './assets/common.css';

import * as serviceWorker from './serviceWorker';
//引入页面组件
import Home from './pages/Home/Home.jsx';
import Lend from './pages/Lend/Lend.jsx';
import Sign from './pages/Sign/Sign.jsx';
import Service from './pages/Service/Service.jsx';
import Mine from './pages/Mine/Mine.jsx';

import Footer from './containers/Footer/Footer.jsx'

ReactDOM.render(
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
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
