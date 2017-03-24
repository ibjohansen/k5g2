import React, {Component, PropTypes} from 'react';
import * as firebase from 'firebase';
import {nodeToArray} from '../../utils';

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
    const items = nodeToArray(list);
    return (
      <div className="items">{this.renderList(items)}</div>
    )
  }

  renderList(list) {
    const renderDetails = this.state.renderDetails;
    return list.map((item, idx) => {
      return (
        <div className="column list" key={idx}>
          <div onClick={this.handleToggleDetails} className="u-pull-left">
            {item.name}
            {renderDetails && this.renderDetails(list[0].items)}
          </div>
        </div>
      )
    })
  }

  render() {
    const {listObject = {}} = this.props;
    const list = nodeToArray(listObject);
    return ( <div className="list">{this.renderList(list)}</div> )
  }
}

List.propTypes = {
  listObject: PropTypes.object
};

export default List;
