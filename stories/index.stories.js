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
  .add('Documentation', () => withClassPropertiesKnobs(DileToast), { notes: { markdown: readme } })
