import {LitElement, html, css} from '@polymer/lit-element';
import './add-item';
import './list-items'
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TodoApp extends LitElement {
    static get properties() {
        return {
            todoList: {
                type: Array
            }
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
       
        this.addEventListener('doneItem',(e) => {
            //e.detail.id;
            const index = this.todoList.findIndex(item => item.id == e.detail.todoItemId);
            this.todoList[index].done = !this.todoList[index].done;
            localStorage.setItem('todo-list', JSON.stringify(this.todoList));

       });

        this.addEventListener('removeItem',(e) => {
             //e.detail.id;
             const index = this.todoList.findIndex(item => item.id == e.detail.todoItemId);
             this.todoList.splice(index, 1);
             this.todoList = [...this.todoList];
             localStorage.setItem('todo-list', JSON.stringify(this.todoList));

        });

        this.addEventListener('addItem',(e) => {
            this.todoList = e.detail.todoList;
        });


        this.todoList = JSON.parse(localStorage.getItem('todo-list')) || [];
    }

    // static get styles() {
    //     return [
    //         super.styles,
    //         css``,
    //     ];
    // }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
          <add-item></add-item>
          <list-items .todoList="${this.todoList}"></list-items>
        `;
    }

}

customElements.define('todo-app', TodoApp);