import React, { Component } from 'react';
import './Lheader.css';

class Lheader extends Component {
  //数据
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  //事件


  //html
  render() {
    return (
      <div>
        <header className="header tc">
            <article className="header_container por">
                {/*切换*/}
                <h1 className="ft15 nav_head tc">
                    <a href="/about?type=0" className="fixd cur" type="PRODUCT" value="2">散标区</a>
                    <a href="/about?type=1" className="curt">债转区</a>
                </h1>
            </article>
        </header>        
        <div className="inform">
            <h2>
                出借人适当性管理告知
            </h2>
            <img src="http://weixin.51tiancai.com/tiancaibao/pages/invest/images/icon.png" className="switch" />
            <p className="hide txind">
                作为网络借贷的出借人，应当具备投资风险意识，风险识别能力，拥有非保本类金融产品投资经验并熟悉互联网金融。请您在出借前，确保了解借款项目的主要风险，同时确认具有相应的风险认知和承受能力，并自行承担出借可能产生的相关损失。
            </p>
        </div>
        </div>
        
       
    );
  }
}

export default Lheader;