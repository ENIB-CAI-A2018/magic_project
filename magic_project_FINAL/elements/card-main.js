import { PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js';

import '../node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '../node_modules/@polymer/app-route/app-route';
import '../node_modules/@polymer/app-route/app-location';

import '../node_modules/@granite-elements/granite-bootstrap/granite-bootstrap.js';

import './card-list.js';
import './card-detail.js';

export class CardMain extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
    
      <app-location route="{{route}}" use-hash-as-path></app-location>

      <app-route route="[[route]]" pattern="/cards" active="{{cardListActive}}"></app-route>
      <app-route route="[[route]]" pattern="/card/:id" data="{{cardId}}" active="{{cardIdActive}}"></app-route>


      <template is="dom-if" if="{{cardListActive}}">
        <card-list></card-list>
      </template>
      
      <template is="dom-if" if="{{cardIdActive}}">
        <card-detail id="[[cardId.id]]"></card-detail>
      </template>
    `;
  }


  static get properties() {
    return {
      cardListActive: {
        type: Boolean,
      },
      cardIdActive: {
        type: Boolean,
      },
      cardId: {
        type: String,
      },
      route: {
        type: Object,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.route.path) {
      this.route = { ... this.route, path: '/cards' }
    }
  }
}


customElements.define('card-main', CardMain);
