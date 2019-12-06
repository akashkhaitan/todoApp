import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `todo-app`
 * This is a todo application made using polymer
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TodoApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'todo-app',
      },
    };
  }
}

window.customElements.define('todo-app', TodoApp);
