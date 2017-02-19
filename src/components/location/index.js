import React, {Component, PropTypes} from 'react';

class Location extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      mapClicked: false
    }
  }

  handleClick() {

    this.setState({mapClicked: true})
  };

  handleMouseLeave() {
    this.setState({mapClicked: false})
  }

  render() {
    const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9871876692318!2d10.639021216421959!3d59.91575998186786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416cfeb0aca263%3A0x5127362dc7ab098e!2sKirkehaugsveien+5G%2C+0283+Oslo!5e0!3m2!1sno!2sno!4v1487013382925';
    const width = window.innerWidth;
    const height = '450';
    const frameBorder = '0';
    return (
      <div id="location"
        className="map-container u-full-width"
        onClick={this.handleClick}
        onMouseLeave={this.handleMouseLeave}>

        <span
          className={this.state.mapClicked ? 'map-container-hidden' : 'map-container-overlay'}>
          klikk i kartet for å zoome med musa
        </span>

        <iframe
          className={this.state.mapClicked ? 'clicked' : ''}
          src={src}
          width={width}
          height={height}
          frameBorder={frameBorder}
          scrolling="no"></iframe>
      </div>

    )
  }
}

Location.propTypes = {
  name: PropTypes.string
};

export default Location;
