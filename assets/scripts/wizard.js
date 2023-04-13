// get form, fieldsets, buttons and spans
const form = document.querySelector('#wizard-form');
const fieldsets = form.querySelectorAll('fieldset');

const nextBtns = form.querySelectorAll('.next-btn');
const prevBtns = form.querySelectorAll('.prev-btn');

const reasonSpan = document.querySelector('#reason-span');
const nameSpan = document.querySelector('#name-span');
const emailSpan = document.querySelector('#email-span');
const messageSpan = document.querySelector('#message-span');
const marketingSpan = document.querySelector('#marketing-span');

// add event listeners to next and previous buttons
for (let i = 0; i < nextBtns.length; i++) {
  nextBtns[i].addEventListener('click', nextStep);
}

for (let i = 0; i < prevBtns.length; i++) {
  prevBtns[i].addEventListener('click', prevStep);
}

// hide all fieldsets except the first one
for (let i = 1; i < fieldsets.length; i++) {
  fieldsets[0].style.display = 'block';
  fieldsets[i].style.display = 'none';
}

function getCurrentFieldset() {
  for (let i = 0; i < fieldsets.length; i++) {
    if (fieldsets[i].style.display === 'block') {
      return fieldsets[i];
    }
  }
}

function nextStep(event) {
  event.preventDefault();
  let currentFieldset = getCurrentFieldset();

  // validate inputs
  let isValid = true;
  let inputs = currentFieldset.querySelectorAll('input,textarea');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && !inputs[i].value) {
      isValid = false;
      inputs[i].classList.add('is-invalid');
    } else {
      inputs[i].classList.remove('is-invalid');
    }
  }

  if (isValid) {
    currentFieldset.style.display = 'none';
    currentFieldset.nextElementSibling.style.display = 'block';
  }
}

function prevStep(event) {
  event.preventDefault();
  let currentFieldset = getCurrentFieldset();

  // validate inputs
  let isValid = true;
  let inputs = currentFieldset.querySelectorAll('input,textarea');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && !inputs[i].value) {
      isValid = false;
      inputs[i].classList.add('is-invalid');
    } else {
      inputs[i].classList.remove('is-invalid');
    }
  }

  if (isValid) {
    currentFieldset.style.display = 'none';
    currentFieldset.previousElementSibling.style.display = 'block';
  }
}

// add event listener to form
form.addEventListener('submit', submitForm);

// function to submit form
function submitForm(event) {
  event.preventDefault();

  const clientData = {
    name: form.name.value,
    reason: form.reason.value,
    message: form.message.value,
    email: form.email[0].value,
    clientAcceptsMarketing: form.email[1].checked,
  };

  let reasonSpanInnerTextHelper = '';
  if (clientData.reason === 'query') {
    reasonSpanInnerTextHelper = 'Query or suggestion';
  } else if (clientData.reason === 'quotation') {
    reasonSpanInnerTextHelper = 'Quotation';
  } else {
    reasonSpanInnerTextHelper = 'Claim';
  }

  document.querySelector('#summary').style.display = 'block';

  reasonSpan.innerText = reasonSpanInnerTextHelper;
  nameSpan.innerText = clientData.name;
  emailSpan.innerText = clientData.email;
  messageSpan.innerText = clientData.message;
  marketingSpan.innerText = clientData.clientAcceptsMarketing
    ? '(will receive discounts and offers)'
    : `(won't receive marketing notifications)`;

  form.name.value = '';
  document.querySelector('input[name="reason"]:checked').checked = false;
  form.message.value = '';
  form.email[0].value = '';
  form.email[1].checked = false;

  fieldsets[0].style.display = 'block';
  for (let i = 1; i < fieldsets.length; i++) {
    fieldsets[i].style.display = 'none';
  }

  window.location.href = '#scroll-summary';
}
