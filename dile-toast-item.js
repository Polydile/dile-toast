import { LitElement, html, css } from 'lit-element';

export class DileToastItem extends LitElement {
  static get properties() {
    return {
      msg: { type: Object },
    };
  }

  constructor() {
    super();
    this.msg = {
      msg: '',
      toastType: 'neutral',
      hidden: false
    }
  }

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      :host {
        display: block;
      }
      div {
        color: var(--dile-toast-text-color, #fff);
        padding: var(--dile-toast-padding, 10px 15px);
        margin-top: 10px;
        position: relative;
        top: 0;
        opacity: 1;
        width: var(--dile-toast-width, 280px);
        overflow: hidden;
        transition: all 0.4s ease;
      }
      .hidden {
        top: 20px;
        opacity: 0;
        height: 0;
        padding: 0;
      }
      .error {
        background-color: var(--dile-toast-error-color, #e74c3c);
      }
      .success {
        background-color: var(--dile-toast-success-color, #27ae60);
      }
      .neutral {
        background-color: var(--dile-toast-neutral-color, #303030);
      }
    `;
  }

  render() {
    return html`
    <div class="${ this.msg.hidden ? 'hidden' : '' } ${ this.getClassType(this.msg.toastType) }">
      ${this.msg.text}
    </div>
    `;
  }

  getClassType(toastType) {
    switch(toastType) {
      case 'error':
      case 'success':
        return toastType;
      default:
        return 'neutral'
    }
  }
}
customElements.define('dile-toast-item', DileToastItem);