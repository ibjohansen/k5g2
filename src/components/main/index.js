import React, {Component, PropTypes} from 'react';
import * as firebase from 'firebase';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/main.scss';
import * as images from '../../images';
import Header from '../header';
import Location from '../location';
import Contacts from '../contacts';

var config = {
  apiKey: "AIzaSyAGZ8LWiZ480DFqnh9JzCUN0NY-2Pe1HUc",
  authDomain: "k5gapi.firebaseapp.com",
  databaseURL: "https://k5gapi.firebaseio.com",
  storageBucket: "k5gapi.appspot.com",
  messagingSenderId: "752632604796"
};

firebase.initializeApp(config);

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null
    };
  }

  getContacts() {
    const db = firebase.database();
    return db.ref('/contacts').once('value').then((snapshot) => {
      return snapshot.val();
    });
  };

  componentWillMount() {
    this.getContacts().then((contacts) => this.setState({contacts}));
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div>
        <div className="section tak"></div>

        <div className="section">
          <div className="container">
            <div className="row">
              <Location />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              {contacts && <Contacts contacts={contacts}/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;