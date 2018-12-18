import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

// Import template repeater
import '@polymer/polymer/lib/elements/dom-repeat.js';

import '@granite-elements/granite-bootstrap/granite-bootstrap';

import './card-list-item.js';

//const MongoClient = require('mongodb').MongoClient
/*
var db
MongoClient.connect('mongodb://kretadred:budy3410@ds119024.mlab.com:19024/magic_project', { useNewUrlParser: true }, (err, client) => 
{
  if (err) {return console.log(err)}
  db = client.db('magic_project') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
	})
})
*/
export class CardList extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
      <div class="cards container">
        <div class="row">
          <div class="col-md-3">
            <!--Sidebar content--> 
            <div class="form-group">
              <label for="search">Search</label>
              <input 
                  type="text" 
                  class="form-control" 
                  id="search"  
                  placeholder="Enter search"
                  on-input="_inputChange">
              <label for="sort" class="mt-3">Sort by</label>
              <select 
                  id="sort" 
                  class="form-control"
                  on-change='_sortingChanged'>
                <template is="dom-repeat" items="[[criteria]]">
                  <option 
                      value="[[item.name]]">
                    [[item.label]]
                  </option>
                </template>
              </select>
              <label for="descending" class="mt-3">Descending sort</label>
              <input 
                  id="descending" 
                  type="checkbox" 
                  on-change="_descendingChange">
            </div>
          </div>
          <div class="col-md-9">
            <div class="cards">
              <template 
                  id="cardList" is="dom-repeat" 
                  items="[[cards]]" filter="_cardFilter" sort="_cardSorter">
                <card-list-item 
                    id="[[item.id]]"
                    name="[[item.name]]" 
                    description="[[item.description]]"
                    img="[[item.img]]"
                    set="[[item.set]]"
                    num="[[item.num]]">
                </card-list-item>
              </template>
            </div>
            <div>Number of cards in list: [[currentCards]]</div>
          </div>          
        </div>
      </div>
    `;
  }

  static get  () {
    return {
      cards: {
        type: Array,
      },
      filterText: {
        type: String,
      },
      currentCards: {
        type: String,
        computed: '_getCurrentCards(cards, filterText)',
      },
      criterium: {
        type: String,
      },
      descendingSort: {
        type: Boolean,
      }
    }
  }

  _inputChange() {
    this.filterText = this.$.search.value;
    this.$.cardList.render();
  }

  _sortingChanged() {
    this.criterium = this.$.sort.selectedOptions[0].value;
    this.$.cardList.render();
  }

  _descendingChange() {
    this.descendingSort = this.$.descending.checked;
    this.$.cardList.render();
  }

  _cardFilter(item) {
      return item.name.match(new RegExp(this.filterText, 'i'));
  }

  _cardSorter(a, b) {
    var invert = 1;
    if (this.descendingSort) invert = -1;
    if ( a[this.criterium] === b[this.criterium] ) return 0;
    if ( a[this.criterium] < b[this.criterium] ) return -1*invert;
    if ( a[this.criterium] > b[this.criterium] ) return 1*invert;         
  }

  _getCurrentCards() {
    return this.cards.filter((item) => item.name.match(new RegExp(this.filterText, 'i'))).length;
  }

  async _getData() {
    try {
      //const response = await fetch('/data/cards/cards.json');
      //this.cards = await response.json();
      db.collection('cards').find({name: "Chat Sacre"}).toArray((err,result)=>{this.cards = result[0]})
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }

  constructor() {
    super();
    this.cards = [];

    this.criteria = [
      { name: "name", label: "Alphabetical"},
      { name: "set", label: "Set content" }
    ];

    this.criterium = this.criteria[0].name;

    this._getData();
  }
}

customElements.define('card-list', CardList);
