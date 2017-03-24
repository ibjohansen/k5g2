import React, {Component, PropTypes} from 'react';
import MainPage from '../components/main';
import ListPage from '../components/lists';
import Page404 from '../components/page404';

const routes = {
  MAIN: 'main',
  LISTS: 'lists'
};

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: {
        current: routes.MAIN,
        main: routes.MAIN,
        lists: routes.LISTS
      }
    };
  }

  getCurrentLocation() {
    if (window.location.hash) {
      return window.location.hash.split('#')[1];
    }
    if (window.location.pathname === '/') {
      return routes.MAIN;
    }
  }

  updateCurrentLocation(location) {
    const state = this.state;
    state.pages.current = location;
    this.setState(state);
  }

  componentWillMount() {
    const main = this.getCurrentLocation();
    this.updateCurrentLocation(main);

    if ('onhashchange' in window) {
      this.hasChange();
    } else {
      //do something for the poor buggers
      console.log('browser does not support onhashchange');
    }
  }

  hasChange() {
    window.onhashchange = () => {
      this.updateCurrentLocation(this.getCurrentLocation());
    };
  }

  render() {
    switch (this.state.pages.current) {
      case '':
        return <MainPage/>;

      case 'main':
        return <MainPage/>;

      case 'lists':
        return <ListPage/>;

      default:
        return <Page404 location={this.state.pages.current || ''}/>;
    }
  }
}

export default Router;





