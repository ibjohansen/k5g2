import React, {Component, PropTypes} from 'react';
import Headroom from 'react-headroom';

class Header extends Component {

  render() {
    return (
      <Headroom>
        <div className="header">
          <h1>HEADER</h1>
        </div>
      </Headroom>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string
};

export default Header;
