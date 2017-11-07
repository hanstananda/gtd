import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (

      <div>
        <div className="row home-menu-bar">
          <div className="container">
            <div className="col-sm-2_5">
              Home
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
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
