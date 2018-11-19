import React, { Component } from 'react';

class Sbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [{
                title: "保障措施",
                href: ""
            }, {
                title: "信息暴露",
                href: ""
            }, {
                title: "平台月报",
                href: ""
            }, {
                title: "风险教育",
                href: ""
            }, {
                title: "风险测评",
                href: ""
            }, {
                title: "网贷知识",
                href: ""
            }, {
                title: "意见反馈",
                href: ""
            },]
        };
    }
    render() {
        return (
            <div className="wra_item">
                <ul className="mt10">
                    {(() => {
                        return (
                            this.state.lists.map((item,idx) => {
                                return (
                                    <li key={idx}>
                                        <a href="/about/app-safe" title={item.title}>
                                            <span className="fl ft14">{item.title}</span>
                                            <strong className="fr ft14 fn por pr15"></strong>
                                        </a>
                                    </li>
                                )
                            })
                        )
                    })()}
                    <li>
                        <a href="/about/app-safe" title="安全保障">
                            <span className="fl ft14">保障措施</span>
                            <strong className="fr ft14 fn por pr15"></strong>
                        </a>
                    </li>
                </ul>
                <ul className="mt10">
                    <li>
                        <a href="/about/help" title="关于天财宝">
                            <span className="fl ft14">关于天财宝</span>
                            <strong className="fr ft14 fn por pr15">  </strong>
                        </a>
                    </li>
                </ul>
                <p className="tc pt10 pb5 a0a ft12">当前版本 V4.0</p>
            </div>
        );
    }
}

export default Sbody;
