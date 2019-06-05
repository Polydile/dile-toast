# dile-toast

This is a Web Component to send user feedback, inspired in the Material Design toast component, based on LitElement.

```
<eit-toast id="myToast" duration="5000"></eit-toast>
```

To use this component and show feedback messages to the user, simpy call the open() method of the component. There are two arguments accepted:

- The message you wish to send.
- The status of the message: 'success', 'error' or 'neutral'. This is an optional argument, default value is 'neutral'.

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
