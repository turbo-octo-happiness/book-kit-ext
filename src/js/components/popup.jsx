import React from 'react';

export default class Popup extends React.Component {
  clicked(tab) {

  }

  render() {
    let page;
    chrome.tabs.getSelected(null, (tab) => {
      page = tab;
      console.log(tab);
    });
    console.log(page);

    // async actions making `page` undefined before it gets used by tab

    return (
      <div>
        <h1>Book Kit</h1>
        <form>
          <label htmlFor="form-title">Title *</label>
          <input
            type="text"
            ref={(title) => { this.title = title; }}
            id="form-title"
            defaultValue={page.title}
            required
          />
          <label htmlFor="form-url">URL *</label>
          <input
            type="text"
            ref={(url) => { this.url = url; }}
            id="form-url"
            defaultValue={page.url}
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
}
