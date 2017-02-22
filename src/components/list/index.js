import React, {Component, PropTypes} from 'react';
import * as firebase from 'firebase';
import {objectToArray} from '../../utils';

class List extends Component {

  constructor(props) {
    super(props);

    this.handleToggleDetails = this.handleToggleDetails.bind(this);

    this.state = {
      renderDetails: false
    };
  }

  handleToggleDetails() {
    this.setState({renderDetails: !this.state.renderDetails})
  }

  renderDetails(list) {
    const items = objectToArray(list);
    return (
      <div className="items">{this.renderList(items)}</div>
    )
  }

  renderList(list) {
    return list.map((item, idx) => {
      return (
        <div className="one-half column list" key={idx}>
          <div className="one-half column">
            <div
              onClick={this.handleToggleDetails}
              className="details u-pull-left">{item.name}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const {listObject = {}} = this.props;
    const renderDetails = this.state.renderDetails;
    const list = objectToArray(listObject);
    return (
      <div>
        <div className="list">{this.renderList(list)}</div>
        {renderDetails && this.renderDetails(list[0].items)}
      </div>
    )
  }
}

List.propTypes = {
  listObject: PropTypes.object
};

export default List;
