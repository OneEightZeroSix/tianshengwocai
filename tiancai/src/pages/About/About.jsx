import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import Aheader from '../../containers/About_cont/Aheader/Aheader.jsx';

import Asafe from '../../containers/About_cont/Asafe/Asafe.jsx'
import Ainfop from '../../containers/About_cont/Ainfop/Ainfop.jsx'
import Areport from '../../containers/About_cont/Areport/Areport.jsx'
import Aeducation from '../../containers/About_cont/Aeducation/Aeducation.jsx'
import Aassessment from '../../containers/About_cont/Aassessment/Aassessment.jsx'

class About extends Component {
	render() {
		return (
			<div>
                <Aheader />
				<Switch>
                    <Route path="/about/safe" component={Asafe} />
                    <Route path="/about/infop" component={Ainfop} />
                    <Route path="/about/report" component={Areport} />
                    <Route path="/about/education" component={Aeducation} />
                    <Route path="/about/assessment" component={Aassessment} />
				</Switch>
			</div>
		);
	}
}

export default About;
