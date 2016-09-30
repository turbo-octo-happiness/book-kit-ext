import React from 'react';
import jwtDecode from 'jwt-decode';
import Popup from './popup';

export default class PopupContainer extends React.Component {
  constructor() {
    super();
    this.setPage = this.setPage.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.state = {
      profile: {},
      error: '',
      token: null,
      isAuthenticated: false,
      page: {},
    };
  }

  setPage(page = {}) {
    if (page.url !== this.state.page.url) {
      this.setState({
        page,
      });
    }
  }

  getProfile(lock, authResult) {
    console.log('in get profile');
    lock.getProfile(authResult.idToken, (err, profile) => {
      if (err) {
        this.setState({
          error: err,
        });
      }

      this.setState({
        profile,
        token: authResult.idToken,
      });
    });
  }

  componentWillMount() {
    const jwt = this.state.token;
    // if (jwt) {
    //   const jwtExp = jwtDecode(jwt).exp;
    //   const expiryDate = new Date(0);
    //   expiryDate.setUTCSeconds(jwtExp);
    //
    //   if (new Date() < expiryDate) {
    //     return this.setState({
    //       isAuthenticated: true,
    //     });
    //   }
    // }
    //
    return this.setState({
      isAuthenticated: false,
    });
  }

  render() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      this.setPage(tabs[0]);
    });

    return (
      <Popup
        isAuthenticated={this.state.isAuthenticated}
        page={this.state.page}
        getProfile={this.getProfile}
      />
    );
  }
}
