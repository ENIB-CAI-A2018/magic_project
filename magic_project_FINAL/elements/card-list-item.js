// Import PolymerElement class and html helper definition
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import '@granite-elements/granite-bootstrap/granite-bootstrap.js';

// Define the element's class element
export class CardListItem extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
      <style>
        .card {
          margin: 10px;
          padding: 10px;
          border: solid 1px black;
          border-radius: 10px;
          min-height: 150px;
        }
        .el-img {
          max-height: 100px;
        }
        .el-set {
          clear:both;
        }
      </style>
      <div id="[[id]]" class="card clearfix">
        <img class="float-right el-img" src="/data/cards/[[img]]">
        <a href="#/card/[[id]]"><h2 class="el-name">[[name]]</h2></a>
        <p class="el-description">[[description]]</p>
        <p class="float-right el-set">Set content: [[set]]%</p>
      </div>
    `;
  }

  static get properties() {
    return {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      img: {
        type: String,
      },
      set: {
        type: String,
      },
    }
  }
}

// Associate the new class with an element name
customElements.define('card-list-item', CardListItem);
