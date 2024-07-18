const scriptURL = 'https://script.google.com/macros/s/AKfycbxhcCnmfwNCPm2zElR1uUrw3zn6EGCq05rPJWidaPY9aUsPvmWuLgj61Jd86-NP06Xr/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})