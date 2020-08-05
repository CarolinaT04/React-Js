//Dependencies
import React, { Component } from 'react';
import ProTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {
   static proTypes = {
     copyright: ProTypes.string
   };

  render(){
    const { copyright= '&copy; React 2020'} = this.props;
  return (
    <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }}/>
    </div>
  );
}
}

export default Footer;
