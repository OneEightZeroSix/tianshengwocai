import React, { Component } from 'react';
import './Swiper.css';

class Swiper extends Component {
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
        <div className="swiper-container por swiper-container-horizontal"> 
           <a href="javascript:;" className="sign_btn ft14 coff poa signFlot">已签到</a> 
           <div className="swiper-wrapper"> 
            <div className="swiper-slide swiper-slide-prev" style={{
              width: "375px"
            }}>
             <a href="https://weixin.51tiancai.com/jump/november-nineteen"><img src="http://weixin.51tiancai.com/uploads/7db3bb1ce56d8eb779494be938225ee3.jpg" alt="banner" /></a>
            </div>
            <div className="swiper-slide swiper-slide-active" style={{
              width: "375px"
            }}>
             <a href="https://mp.weixin.qq.com/s/AfkcivkDMFffmYbuGUT_sA"><img src="http://weixin.51tiancai.com/uploads/6a1c15a93c9e0219f43d23da79b1d606.jpg" alt="banner" /></a>
            </div>
            <div className="swiper-slide swiper-slide-next" style={{
              width: "375px"
            }}>
             <a href="http://weixin.51tiancai.com/infop"><img src="http://weixin.51tiancai.com/uploads/7aee236a6799b976a86fc91c08247727.jpg" alt="banner" /></a>
            </div>
           </div> 
           <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span className="swiper-pagination-bullet"></span>
           </div> 
           <img src="/tiancaibao/pages/index/images/advert_tip.png" alt="" className="advert" /> 
        </div>
    );
  }
}

export default Swiper;