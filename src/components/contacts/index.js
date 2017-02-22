import React, {Component, PropTypes} from 'react';
import * as firebase from 'firebase';
import {objectToArray} from '../../utils';

class Contacts extends Component {

  renderName(contact) {
    return (
      <span><a href={`mailto:${contact.email}`} alt={contact.email}>{contact.name}</a></span>
    )
  }

  renderContacts(contacts) {
    const list = objectToArray(contacts);
    return list.map((contact, idx) => {
      return (
        <div className="one-half column contact" key={idx}>
          <div className="one-half column">
            <div className="name u-pull-left"><h4>{this.renderName(contact)}</h4></div>
            <div className="details u-pull-left">{contact.details}</div>
          </div>
          <div className="one-half column">
            <div className="image">
              <img src={contact.image} alt={contact.name}/>
            </div>
          </div>

        </div>
      )
    })
  }

  render() {
    const {contacts = {}} = this.props;
    return (
      <div className="contacts">{this.renderContacts(contacts)}</div>
    )
  }
}

Contacts.propTypes = {
  contacts: PropTypes.object
};

export default Contacts;
