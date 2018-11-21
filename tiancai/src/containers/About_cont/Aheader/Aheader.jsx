import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Aheader extends Component {
    render() {
        return (
            <header className="header tc">
                <article className="header_container por">
                    <i className="home poa">
                        <Link to="javascript:history.go(-1)" title="首页"></Link>
                    </i>
                    <h1 className="ft16">保障措施</h1>
                </article>
            </header>
        );
    }
}

export default Aheader;
