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
      local: 'some local stuff'
    };
  }

  render() {
    const {name} = this.props;
    const {local} = this.state;
    const style = {marginTop: '25%'};

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="two-third column" style={style}>
              <h4>Basic Page</h4>
              <div>
                <img src={images.ROOF} alt=""/>
                <h1>{name}</h1>
                <h2>{local}</h2>
                <Location />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MainPage.propTypes = {
  name: PropTypes.string
};

export default MainPage;
