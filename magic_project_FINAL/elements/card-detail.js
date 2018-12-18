import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@granite-elements/granite-bootstrap/granite-bootstrap';

export class CardDetail extends PolymerElement {

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
        .back {
          width: 50px;
          height: 50px;
        }
        .img {
          float: left;
          border: 1px solid black;
          margin-right: 3em;
          margin-bottom: 2em;
          background-color: white;
          padding: 2em;
          height: 400px;
          width: 400px;
        }
        .set {
          clear:both;
        }

        ul.card-thumbs {
          margin: 0;
          list-style: none;
        }

        ul.card-thumbs li {
          border: 1px solid black;
          display: inline-block;
          margin: 1em;
          background-color: white;
        }

        ul.card-thumbs img {
          height: 100px;
          width: 100px;
          padding: 1em;
        }

        ul.specs {
          clear: both;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        ul.specs > li{
          display: inline-block;
          width: 200px;
          vertical-align: top;
        }

        ul.specs > li > span{
          font-weight: bold;
          font-size: 1.2em;
        }

        ul.specs dt {
          font-weight: bold;
        }

        h1 {
          border-bottom: 1px solid gray;
        }
      </style>

      <div id="[[card.id]]" class="card clearfix">
        <a href="#/cards"><img class="pull-right back" src="/img/back.png"></a>
        <h1 class="name">[[card.name]]</h1>
        <img class="pull-right img" src="/data/[[card.img]]">
        <p class="description">[[card.description]]</p>

        <ul class="card-thumbs">
          <li>
            <img src="/data/[[card.img]]" card="[[card.img]]" on-click="setImage">
          </li>
        </ul>
        <ul class="specs">
          <li>
            <dl>
              <dt>Set content</dt>
              <dd>[[card.set]]%</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Numero</dt>
              <dd>[[card.num]]</dd>
            </dl>
          </li>
        </ul>
      </div>
    `;
  }


  static get properties() {
    return {
      id: {
        type: String,
        observer: '_onIdChange',
      },
      card: {
        type: Object,
      },
    };
  }

  async _onIdChange() {
    const url = `/data/cards/details/${this.id}.json`;
    try {
      const response = await fetch(url);
      this.card = await response.json();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }
}


customElements.define('card-detail', CardDetail);
