import React, { Component } from 'react';
//css
import './Lend.css';
import '../../assets/index.css';
import '../../assets/common.css';
import '../../assets/swiper.css';
//引入子组件
import Lheader from '../../containers/Lheader/Lheader.jsx';
import Footer from '../../containers/Footer/Footer.jsx';
import Llist from '../../containers/Llist/Llist.jsx';
class Lend extends Component {
  render() {
    return (
      <div>
        <Lheader />
        <Llist />
        <Footer />
      </div>
    );
  }
}

export default Lend;
