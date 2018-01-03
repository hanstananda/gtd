import React, {PropTypes} from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="contact-body">
        <div className="row contact-menu-bar">
          	<div className="container">
            	<div className="col-sm-2_5">
              		<Link to="">Home</Link>
            	</div>
            	<div className="col-sm-2_5">
              		<Link to="/about">About</Link>
            	</div>
            	<div className="col-sm-2_5">
              		<Link to="/history">History</Link>
            	</div>
            	<div className="col-sm-2_5">
					<Link to="/anthem">Anthem</Link>
            	</div>
            	<div className="col-sm-2_5">
              		Contact Us
            	</div>
          	</div>
        </div>
	</div>);
  }
}

Contact.propTypes = {
};
