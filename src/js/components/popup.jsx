import React from 'react';
// import Auth0Lock from 'auth0-lock';

// https://turbo-octo-happiness.github.io/book-kit-ext-login/

export default class Popup extends React.Component {
  loginWindow() {
    let token;
    chrome.windows.create({'url': 'build/login.html', 'focused': true, 'type': 'popup', 'state': 'maximized'}, function(tab) {
      console.log(tab, '<<<< TAB');
      console.log(chrome.storage, '<<<< CHROME STORAGE');
    });
  }

  render() {
    const { isAuthenticated, page, getProfile } = this.props;
    //
    // const lock = new Auth0Lock('6ElpyE9EazmBox2b9PAWytCnFJQTxBCa', 'ericsnell.auth0.com', {
    //   auth: {
    //     redirectUrl: 'http://localhost:5000/#/main',
    //     responseType: 'token',
    //     params: {
    //       scope: 'openid name identities picture',
    //     },
    //   },
    // });
    //
    // lock.on('authenticated', (authResult) => {
    //   getProfile(lock, authResult);
    // });

    if (isAuthenticated) {
      return (
        <div>
          <h1>Book Kit</h1>
          <form>
            <label htmlFor="form-title">Title *</label>
            <input
              type="text"
              ref={(title) => { this.title = title; }}
              id="form-title"
              // defaultValue={page.title}
              required
            />
            <label htmlFor="form-url">URL *</label>
            <input
              type="text"
              ref={(url) => { this.url = url; }}
              id="form-url"
              // defaultValue={page.url}
              required
            />
            <label htmlFor="form-description">Description</label>
            <textarea
              ref={(description) => { this.description = description; }}
              id="form-description"
            />
            <label htmlFor="form-screenshot">Screenshot</label>
            <input
              type="text"
              ref={(screenshot) => { this.screenshot = screenshot; }}
              id="form-screenshot"
            />
            {/* <label htmlFor="form-folder">Folder *</label>
            <select
              ref={folder => { this.folder = folder; }}
              id="form-folder"
              className="folder-dropdown"
              required
            >{folderArr}
            </select> */}
            <button>Submit</button>
          </form>
        </div>
      );
    }

    return (
      <div>
        <div id="root" style={{ width: '320px', margin: '40px auto', padding: '10px', borderStyle: 'dashed', borderWidth: '1px', boxSizing: 'border-box' }}>
          embedded area
        </div>
        <button onClick={this.loginWindow}>Login</button>
      </div>
    );
  }
}
