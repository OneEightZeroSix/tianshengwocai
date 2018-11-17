import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
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
        <div className="shop_mast "> 
           <div className="mast_bg"> 
              <p className="co3d pt214 ft14 have_sign">已连续签到<strong className="days ft16"> </strong>天</p> 
              <p className="ft14 pt206 weight over_hide co3d">+<strong className="integral"> </strong>积分</p> 
              <p className="ft14 sign_no co3d">已连续签到<strong className="days"> </strong>天</p> 
              <p className="ft14 red">明天签到奖励<strong className="integral_tomorrow"> </strong>分</p> 
              <p className="pt10 tc close_btn"> <a href="javascript:;" title="关闭"> <img src="/tiancaibao/pages/index/images/close_03.png" alt="关闭" width="45" height="45" /> </a> </p> 
              <a href="/sign_in/sign-record" className="record_dlog"></a> 
              <a href="/shop/taste" className="taste_dlog"></a> 
          </div> 
        </div>
    );
  }
}

export default SignIn;