import React, {Component} from 'react';
import './Home.css';

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
              About
            </div>
            <div className="col-sm-2_5">
              History
            </div>
            <div className="col-sm-2_5">
              Anthem
            </div>
            <div className="col-sm-2_5">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    );
  }
}
