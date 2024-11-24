const scriptURL = 'https://script.google.com/macros/s/AKfycbxdJN7yCCS6cWMQLFE0b5GhNsqlMOB4B4k5nPLL79G0rVHbon6RisqbEohoq-f908n3/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})