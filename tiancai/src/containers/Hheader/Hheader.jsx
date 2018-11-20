import React, { Component } from 'react';
import './Hheader.css';
//classNames库
import classnames from 'classnames'


class Hheader extends Component {
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
        <header className="header tc hide" id="headOnce"> 
           <article className="header_container por"> 
            <h1 className="ft18">天财宝</h1> 
            <h5 className="poa sign_btn ft14">已签到</h5> 
           </article> 
        </header>
    );
  }
}

export default Hheader;