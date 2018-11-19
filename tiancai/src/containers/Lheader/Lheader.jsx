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
        <header className="header tc">
            <article className="header_container por">
                <!--切换-->
                <h1 className="ft15 nav_head tc">
                    <a href="/about?type=0" className="fixd cur" type="PRODUCT" value="2">散标区</a>
                    <a href="/about?type=1" className="curt">债转区</a>
                </h1>
            </article>
        </header>
    );
  }
}

export default Lheader;