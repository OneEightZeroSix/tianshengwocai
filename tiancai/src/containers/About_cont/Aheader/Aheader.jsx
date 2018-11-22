import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Aheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        switch (window.location.hash.slice(1)) {
            case "/about/safe":
                this.state.title = "保障措施"
                break;
            case "/about/infop":
                this.state.title = "信息暴露";
                break;
            case "/about/report":
                this.state.title = "平台月报";
                break;
            case "/about/education":
                this.state.title = "风险教育";
                break;
            case "/about/assessment":
                this.state.title = "风险测评";
                break;
            case "/about/industry":
                this.state.title = "网贷知识";
                break;
            case "/about/feedback":
                this.state.title = "意见反馈";
                break;
            case "/about/help":
                this.state.title = "关于我们";
                break;
        }
    }
    render() {
        return (
            <header className="header tc">
                <article className="header_container por">
                    <i className="home poa">
                        <Link to={{ pathname: "/talent/service" }} replace title="首页"></Link>
                    </i>
                    <h1 className="ft16">{this.state.title}</h1>
                </article>
            </header>
        );
    }
}

export default Aheader;
