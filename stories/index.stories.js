import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileToast } from '../dile-toast.js';
import '../dile-toast.js';

import readme from '../README.md';

storiesOf('dile-toast', module)
  .addDecorator(withKnobs)
  .add(
    'Toast demo',
    () => html`
      <dile-toast id="myToast"></dile-toast> 
      <h1>Toast Demo</h1>
      <button @click=${
        () => {
          let toastElement = document.getElementById('myToast');
          toastElement.open('This is a success toast!!', 'success');
        }
      }>Generate success toast</button>
      <button @click=${
        () => {
          let toastElement = document.getElementById('myToast');
          toastElement.open('This is an error toast :(', 'error');
        }
      }>Generate error toast</button>
      <button @click=${
        () => {
          let toastElement = document.getElementById('myToast');
          toastElement.open('This is a bored neutral toast.', 'neutral');
        }
      }>Generate neutral toast</button>
    `, { notes: readme}
  )
  .add(
    'Toast customized',
    () => html`
      <style>
      h1 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      }
      dile-toast {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        --dile-toast-padding: 20px;
        --dile-toast-width: 500px;
        --dile-toast-text-color: #404040;
        --dile-toast-neutral-color: #ddd;
        --dile-toast-success-color: #9cf;
        --dile-toast-error-color: #fcc;
      }
      </style>
      <dile-toast id="myToast"></dile-toast> 
      <h1>Toast customized</h1>
      <button @click=${
        () => {
          let toastElement = document.getElementById('myToast');
          toastElement.open('This is a success toast!!', 'success');
        }
      }>Generate success toast</button>
      <button @click=${
        () => {
          let toastElement = document.getElementById('myToast');
          toastElement.open('This is an error toast :(', 'error');
        }
      }>Generate error toast</button>
      <button @click=${
        () => {
          let toastElement = document.getElementById('myToast');
          toastElement.open('This is a bored neutral toast.', 'neutral');
        }
      }>Generate neutral toast</button>
    `, { notes: readme}
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileToast), { notes: { markdown: readme } })
