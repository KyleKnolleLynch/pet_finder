export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip)
}

// Show alert message if not valid
export function showMessage(message, className) {
  //  create div
  const div = document.createElement('div');
  // add classes
  div.className = `alert alert-${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // get container and form
  const container = document.querySelector('.container');
  const petForm = document.querySelector('#pet-form');
  // insert alert message between container and form
  container.insertBefore(div, petForm);

  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}