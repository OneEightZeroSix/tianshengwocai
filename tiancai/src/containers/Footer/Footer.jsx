import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  //数据
  constructor(props) {
    super(props);
    this.state = {
      nav:0,
       navs:[{
        title:"首页",
        className:"idx",
        link:"/home",
        iconName:"index_icon",
        icon_yel:"index_yel",
        qty:0
       },{
        title:"出借",
        className:"ivst",
        link:"/Lend",
        iconName:"invest_icon",
        icon_yel:"invest_yel",
        qty:0
       },{
        title:"服务",
        className:"sev",
        link:"/service",
        iconName:"serve_icon",
        icon_yel:"serve_yel",
        qty:0
       },{
        title:"我的",
        className:"idx",
        link:"/mine",
        iconName:"home_icon",
        icon_yel:"home_yel",
        qty:2
       }]
    }
  }
    tabClick(index){
      this.setState({
        nav:index
      })
    }
  //事件


  //html
  render() {
    return (
        <div className="foot_menu"> 
           <div className="footer_nav"> 
            <ul>
              {(()=>{
                return (this.state.navs.map((item,index)=>{
                  return (
                    <li onClick={this.tabClick.bind(this,index)} className={`${item.className}`} key={index}> <Link  to={ {pathname:`${item.link}` }}  replace >
                    {/* to={ {pathname:`${item.link}`} repalce */}
                    {(()=>{
                      if(item.qty > 0){
                        return (<i className="messages" id="mes" style={{display: "block"}}>{item.qty}</i>)
                      }
                    })()}
                    <i  className={this.state.nav===index?`iconfont ${item.icon_yel}`:`iconfont ${item.iconName}`}></i> 
                      <div className="name">
                        {item.title}
                      </div> </Link> </li>
                  )
                }))
              })()} 
            </ul> 
           </div> 
          </div>
    );
  }
}

export default Footer;