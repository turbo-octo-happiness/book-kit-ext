import React from 'react';
import Popup from './popup';

export default class PopupContainer extends React.Component {
  constructor() {
    super();
    this.setPage = this.setPage.bind(this);
    this.state = {
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

  render() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      this.setPage(tabs[0]);
    });

    return (
      <Popup
        isAuthenticated={this.state.isAuthenticated}
        page={this.state.page}
      />
    );
  }
}
