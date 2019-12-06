import {LitElement, css, html} from '@polymer/lit-element';
import './todo-item';
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ListItems extends LitElement {
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
        this.todoList = [];
    }

    // static get styles() {
    //     return [
    //         super.styles,
    //         css`
    //         .lists {
    //             padding-left:350px;
    //             margin:0 auto;
    //             max-width:500px;
    //         }
    //         .list {
    //             transform-origin:center bottom;
    //             transition:200ms all linear;
    //         }
    //         .list .title {
    //             color:#B8D4FF;
    //             font-size:1.5rem;
    //             letter-spacing:5px;
    //             text-transform: uppercase;
    //             text-align: center;
    //             margin:3.5rem 0 3.5rem 0;
    //             line-height: 1;
    //         }
    //         .list .list-wrapper  {
    //             list-style: none;
    //             margin:0 0.5rem;
    //             padding:0;
    //         }
    //         @media (max-width: 576px) and (orientation:portrait) {
    //             .lists {
    //                 padding:0 1rem;
    //                 margin-bottom:5rem;
    //             }
    //             .list .title {
    //                 margin:1.5rem 1rem;
    //                 font-size:1.5rem;
    //             }
    //         }`
    //     ];
    // }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
        <style>
             .lists {
                padding-left:350px;
                margin:0 auto;
                max-width:500px;
            }
            .list {
                transform-origin:center bottom;
                transition:200ms all linear;
            }
            .list .title {
                color:#B8D4FF;
                font-size:1.5rem;
                letter-spacing:5px;
                text-transform: uppercase;
                text-align: center;
                margin:3.5rem 0 3.5rem 0;
                line-height: 1;
            }
            .list .list-wrapper  {
                list-style: none;
                margin:0 0.5rem;
                padding:0;
            }
            @media (max-width: 576px) and (orientation:portrait) {
                .lists {
                    padding:0 1rem;
                    margin-bottom:5rem;
                }
                .list .title {
                    margin:1.5rem 1rem;
                    font-size:1.5rem;
                }
            }
            </style>
            <div class="lists">
                <div class="list">
                    <h2 class="title">
                        Today's To do List
                    </h2>
                    <div class="list-wrapper">
                    <ul>${this.todoList.map((todo, index) =>
                        html`<todo-item .todoItem=${todo}></todo-item>`)}</li></ul>
                    </div>
                </div>
            </div>
          
        `;
    }

}

customElements.define('list-items', ListItems);