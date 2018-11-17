import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
        <div className="foot_menu"> 
           <div className="footer_nav"> 
            <ul> 
             <li className="idx"> <a href="/"> <i className="iconfont  index_yel "></i> 
               <div className="name co33">
                首页
               </div> </a> </li> 
             <li className="ivst"> <a href="/about"> <i className="iconfont  invest_icon "></i> 
               <div className="name">
                出借
               </div> </a> </li> 
             <li className="sev"> <a href="/serve"> <i className="iconfont  serve_icon "></i> 
               <div className="name">
                服务
               </div> </a> </li> 
             <li className="hme"> <a href="/home"> <i className="messages" id="mes" style={{
              display: "block"
            }}>2</i> <i className="iconfont  home_icon "></i> 
               <div className="name">
                我的
               </div> </a> </li> 
            </ul> 
           </div> 
          </div>
    );
  }
}

export default Footer;