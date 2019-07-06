# dile-toast

This is a Web Component to send feedback to the user, inspired on the Material Design "toast" component, based on LitElement.

```
<dile-toast id="myToast" duration="5000"></dile-toast>
```

Let's [go to DEMO page](https://dile-toast.polydile.com)! 

## Properties

- **duration**: number of microseconds the toast will be visible on the page.
- **messages**: Array of message objects. You will not use usually this property directly to create feedback messages, instead of that is preferable to use the open () method to create the message object in the expected way for the component.

## Methods

### open(text, status)

To use this component and show feedback messages to the user, simpy call the open() method of the component. There are two arguments accepted:

- **text**: The message you wish to send.
- **status**: The status of the message: 'success', 'error' or 'neutral'. This is an optional argument, default value is 'neutral'.

```
let toastElement = document.getElementById('myToast');
toastElement.open('This is a success toast!!', 'success');
```

## Style customization

The background color of the toast depends on the status of the message. You can customize it using the CSS custom properties bellow.

Custom property | Description | Default
----------------|-------------|---------
--dile-toast-success-color | Success background color | #27ae60
--dile-toast-error-color | Error background color | #e74c3c
--dile-toast-neutral-color | Neutral background color | #303030

