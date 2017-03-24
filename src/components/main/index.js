import React, {Component, PropTypes} from 'react';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/main.scss';
import * as images from '../../images';
import Header from '../header';
import Location from '../location';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null,
      lists: null
    };
  }

  render() {
    return (
      <div>
          <div className="section tak"></div>

        <div className="section">
          <div className="row">
            <a href="/#lists">lists</a>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <Location />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;
