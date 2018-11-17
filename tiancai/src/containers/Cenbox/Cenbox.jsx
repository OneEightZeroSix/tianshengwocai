import React, { Component } from 'react';
import './Cenbox.css';

class Cenbox extends Component {
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
       <div className="cenBox"> 
         <div className="news_eye"> 
          <i className="lb"></i> 
          <ul className="news_list" style={{
            marginTop: "0px"
          }}> 
           <li><a href="/news/messages-shows?message_id=106"><span className="pr20 ft12 co33 news_item">【银行维护】关于近期部分银行维护的公告</span></a></li>
           <li><a href="/news/messages-shows?message_id=121"><span className="pr20 ft12 co33 news_item">【银行维护】浦发银行维护公告</span></a></li>
           <li><a href="/news/messages-shows?message_id=120"><span className="pr20 ft12 co33 news_item">【上新说明】30天锁定期债转产品上线说明</span></a></li>
           <li><a href="/news/messages-shows?message_id=114"><span className="pr20 ft12 co33 news_item">【新浪升级】关于新浪系统升级公告</span></a></li>
          </ul> 
         </div> 
         <div className="tc pt10 pb15 newuser "> 
          <ul> 
           <li className="new_item"> <i className="pb5 register_gray"></i> <span className="ft12 co99">注册即送</span> </li> 
           <li className="new_next"> <i className="progress_gray"></i> </li> 
           <li className="new_item"> <i className="pb5 real_name"></i> <span className="ft12 co33">实名认证</span> </li> 
           <li className="new_next"> <i className="progress"></i> </li> 
           <li className="new_item"> <i className="pb5 risk_evaluation"></i> <span className="ft12 co33 ">风险测评</span> </li> 
           <li className="new_next"> <i className="progress"></i> </li> 
           <li className="new_item"> <i className="pb5 first_lend"></i> <span className="ft12 co33">首笔出借</span> </li> 
          </ul> 
          <div> 
           <a href="/sign-up/verify-id-card" className="btn">开始认证</a> 
           <p>实名并绑卡送<span>5%</span>加息券</p> 
          </div> 
         </div> 
         <div className="nav_floor tc pt10 pb10 hide"> 
          <div className="nav_item"> 
           <a href="/recharge" className="nav_a"> <i className="s_y cz_1"></i> <span className="ft12 co33">充值提现</span> </a> 
           <a href="/shop/index" className="nav_a"> <i className="s_y safe_2"></i> <span className="ft12 co33">积分商城</span> </a> 
           <a href="/about/actives" className="nav_a"> <i className="s_y por active_p nav_new" id="nav_new"></i> <span className="ft12 co33">活动专区</span> </a> 
           <a href="/home/share" className="nav_a"> <i className="s_y fir_p"></i> <span className="ft12 co33">邀请好友</span> </a> 
          </div> 
         </div> 
      </div>
    );
  }
}

export default Cenbox;