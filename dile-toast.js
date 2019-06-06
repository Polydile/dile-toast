import { LitElement, html, css } from 'lit-element';
import './dile-toast-item';

export class DileToast extends LitElement {

  static get properties() {
    return {
      messages: { type: Array },
      duration: { type: Number }
    };
  }

  constructor() {
    super();
    this.messages = [];
    this.duration = 3000;
    this.cleanTimeout = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        bottom: 20px;
        left: 15px;
      }
    `;
  } 

  render() {
    return html`
      ${this.messages.map( msg => html`
        <dile-toast-item 
          .msg="${msg}" 
          duration="${this.duration}"
        ></dile-toast-item>
      `)}
    `;
  }

  open(text, toastType) {
    this.messages = [
      ...this.messages,
      {
        text,
        toastType,
        hidden: false,
      } 
    ];
    this.programMessageClean();
    this.programMessageHide();
  }

  programMessageHide() {
    setTimeout( () => {
      console.log('hidetoast');
      let foundItemToHide = false;
      this.messages = this.messages.map( (item) => {
        if(!foundItemToHide && !item.hidden) {
          foundItemToHide = true;
          return {
            ...item,
            hidden: true
          }
        } else {
          return item;
        }
      });
    }, this.duration);
  }

  programMessageClean() {
    if(this.cleanTimeout) {
      clearTimeout(this.cleanTimeout);
    }
    this.cleanTimeout = setTimeout(() => {
      console.log('go to clean');
      this.messages = this.messages.filter((item) => !item.hidden);
    }, this.duration + 1000);
  }
}
customElements.define('dile-toast', DileToast);