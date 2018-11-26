import React, { Component } from 'react';

import { connect } from 'react-redux';
//router
import { Link } from 'react-router-dom';
//引入swiper
import Swipers from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
//css
import './Detail.css';
//引入jquery
import $ from 'jquery';

//引入子组件

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    //事件
    componentDidMount(){
        var mySwiper = new Swipers('.swiper-container', {
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },         
           loop:true,
           direction : 'vertical',
           setWrapperSize :true,
           slidesPerView: 1,
        })
    }
    //html
    render() {
        return (
            <div>
            <header className="header tc">
                <article className="header_container por">
                    <i className="home poa">
                        <a href="javascript:history.go(-1)" title="首页"></a>
                    </i>
                    <h1 className="ft16 nav_head tc">181119001</h1>
                </article>
            </header>
            <article className="tab_box "> 
            <div className="all_t_d " > 
             <div className="news_eye_d poa swiper-container"> 
              <i className="lb poa"></i> 
              <ul className="news_list ft13 swiper-wrapper" style={{marginTop: "0px"}}>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户137****2536成功出借1400.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户135****4286成功出借1500.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户137****5806成功出借100.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户136****2601成功出借500.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户137****8858成功出借100.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户137****0860成功出借1000.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户138****2300成功出借1100.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户158****6731成功出借1800.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户177****5594成功出借100.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户185****8295成功出借900.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户158****2253成功出借200.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户182****2629成功出借13700.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户159****9945成功出借100.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户186****2527成功出借900.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户157****3040成功出借1000.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户136****3987成功出借12500.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户187****6141成功出借31400.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户150****3912成功出借300.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户159****9945成功出借100.00元</span></a></li>
               <li className="swiper-slide"><a href="###"><span className="pr20">用户151****4286成功出借100.00元</span></a></li>
              </ul> 
             </div> 
             <div className="containt_top_d"> 
              <h1 className="tc fn pb5"> <span className="ft34 coff5">9.50<label className="ft14">%</label> </span> <span className="ft14 coff5">历史年化利率</span> </h1> 
             </div> 
             <div className="content_t_d"> 
              <ul className="tc"> 
               <li className="pl10 pb10  pr10 "> 
                <div className="runing"> 
                 <p className="por"><i className="poa"></i></p> 
                </div> <span className="block pb5"> 按月付息到期还本&nbsp;&nbsp;&nbsp;<label className="l_bor">&nbsp;&nbsp;&nbsp;项目期限</label> <label className="time ft14">180</label>天 </span> </li> 
               <li className="pl10 pb15 pr10 bor_b a0a"> 授信评估等级:<span>AAA</span><span className="cumulativeWrap"><i className="quesClick1"></i></span> <input type="hidden" name="riskLevelInvestMsg" id="risk" value="出借人风险测评结果需在“保守型”及以上" /> </li> 
               <li className="pt15 pb15 bor_b "> <a href="javascript:;"> <i className="icn co55 ft16">110000.00</i> <span className="nocor ft12">项目总额(元)</span> </a> <a href="javascript:;" className="dashed"> <i className="icn co55 ft16">0.00</i> <span className="nocor ft12">剩余可出借金额(元)</span> </a> <a href="javascript:;" className="dashed"> <i className="icn co55 ft16">100.00</i> <span className="nocor ft12">最小出借金额(元)</span> </a> </li> 
              </ul> 
             </div> 
            </div> 
            <div className="ft12 nocor pl15 pt5 pb5 pr15">
             募集期：2018-11-19起&nbsp;&nbsp;不超过20天
             <span className="fr">放款成功T+1计息<span></span></span>
            </div> 
            <div className="content_wra content_tab pt10  por"> 
             <ul className="tab_btn"> 
              <li className="on"> <i className="iconfont pb5 mod_03"></i><br /> <span>项目详情</span> </li> 
              <li> <i className="iconfont pb5 mod_09"></i><br /> <span>常见问题</span> </li> 
              <li className="recordMore"> <i className="iconfont pb5 mod_11"></i><br /> <span>出借记录</span> 
               <span>还款计划</span> </li> 
              <li> <i className="iconfont pb5 mod_12"></i><br /> <span>贷后跟踪</span> </li> 
             </ul> 
             <div className="tap_con mt10" style={{background:"#f1f5f8"}}> 
              <div className="item"> 
               <div className="problem_win"> 
                <iframe src="https://picture.51tiancai.com/DetailPage/201811/7632weixin.html" scrolling="yes" frameBorder="0" width="100%" id="fix-introduction" height="638"></iframe> 
               </div> 
              </div> 
              <div className="item hide"> 
               <div className="problem_win"> 
                <section className="apy_list "> 
                 <div className="items whiteBg"> 
                  <h1 className="ft14 pb5">1.什么是散标产品？</h1> 
                  <p className="pl15">散标产品是一款普通单标类产品，出借人的资金通过新浪支付账户直接划拨给借款人，借款到期后，借款人通过新浪支付账户直接还款给出借人，账户资金与平台账户物理隔离，借贷双方直接交易，确保资金安全，出借成功后持有期间不可转让。</p> 
                 </div> 
                 <div className="items mt4 whiteBg"> 
                  <h1 className="ft14 pb5">2.散标产品的收益是如何计算的？</h1> 
                  <p className="pl15">满标后按照约定利率和还款计划进行收益结算。 </p> 
                 </div> 
                 <div className="items mt4 whiteBg"> 
                  <h1 className="ft14 pb5">3.散标产品单标一般多久能够投满？</h1> 
                  <p className="pl15">根据单标金额大小，满标时间会有所不同，一般1-3天内均可投满。 </p> 
                 </div> 
                 <div className="items mt4 whiteBg"> 
                  <h1 className="ft14 pb5">4.散标产品持有期间为什么不可转让退出？</h1> 
                  <p className="pl15">散标产品相比其他可转产品拥有更高的收益率，为平抑因产品流动性增强给平台造成的风险，散标产品暂不支持债转。如不确定出借期限，建议选择更为灵活的债转产品或自由转产品。</p> 
                 </div> 
                 <div className="items mt4 whiteBg"> 
                  <h1 className="ft14 pb5">5.关于到账时间？</h1> 
                  <p className="pl15">散标产品到期后本息第二天24:00前退还至可用余额，用户可继续出借其他借款或直接提现，根据国家相关政策要求，2018年7月1日起，每日提现≤10000元时，可选择“快速到账”方式，提现当天到账；当日提现金额＞10000元时，选择“普通到账”的交易，当天15:00前操作可T+1到账，当天15:00后操作T+2日到账。</p> 
                 </div> 
                </section> 
               </div> 
              </div> 
              <div className="item hide"> 
               <div className="problem_win"> 
                <article className="tab_css pl15 pr15 white_bg"> 
                 <h1 className="ft14 pb5">共有<span className="ft16">13</span>笔出借</h1> 
                 <table className="tc gray_fnt1" cellPadding="0" cellSpacing="0"> 
                  <thead className="tab_b"> 
                   <tr> 
                    <th>出借用户</th> 
                    <th>出借时间</th> 
                    <th>出借金额(元)</th> 
                   </tr> 
                  </thead> 
                  <tbody id="calendar_item" value="2"> 
                   <tr> 
                    <td>182****2629</td> 
                    <td><span className="nocor">13:22:06</span>2018-11-26</td> 
                    <td>13700.00</td> 
                   </tr> 
                   <tr> 
                    <td>136****3987</td> 
                    <td><span className="nocor">10:20:34</span>2018-11-26</td> 
                    <td>12500.00</td> 
                   </tr> 
                   <tr> 
                    <td>150****0792</td> 
                    <td><span className="nocor">21:16:26</span>2018-11-25</td> 
                    <td>300.00</td> 
                   </tr> 
                   <tr> 
                    <td>151****5330</td> 
                    <td><span className="nocor">09:07:20</span>2018-11-25</td> 
                    <td>3000.00</td> 
                   </tr> 
                   <tr> 
                    <td>176****5565</td> 
                    <td><span className="nocor">09:07:47</span>2018-11-24</td> 
                    <td>10000.00</td> 
                   </tr> 
                   <tr> 
                    <td>176****5565</td> 
                    <td><span className="nocor">19:53:34</span>2018-11-23</td> 
                    <td>10000.00</td> 
                   </tr> 
                   <tr> 
                    <td>150****0890</td> 
                    <td><span className="nocor">14:22:02</span>2018-11-22</td> 
                    <td>500.00</td> 
                   </tr> 
                   <tr> 
                    <td>133****6109</td> 
                    <td><span className="nocor">09:23:51</span>2018-11-22</td> 
                    <td>50000.00</td> 
                   </tr> 
                   <tr> 
                    <td>150****8047</td> 
                    <td><span className="nocor">16:38:31</span>2018-11-20</td> 
                    <td>1000.00</td> 
                   </tr> 
                   <tr> 
                    <td>150****0890</td> 
                    <td><span className="nocor">16:09:50</span>2018-11-20</td> 
                    <td>600.00</td> 
                   </tr> 
                  </tbody> 
                 </table> 
                </article> 
               </div> 
              </div> 
              <div className="item hide"> 
               <iframe src="/about/tracking?id=7632" scrolling="yes" frameBorder="0" height="400px" width="100%"></iframe> 
              </div> 
             </div> 
             <a href="javascript:;" className="btn ft16 gray">还款中</a> 
            </div> 
            <p className="ft12 pt10 pb60 tc nocor">市场有风险，出借需谨慎</p> 
           </article>
           </div>
        );
    }
}

export default Detail;
