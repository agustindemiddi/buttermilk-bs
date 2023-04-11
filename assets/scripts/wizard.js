// get form element, all fieldset elements and spans
const form = document.querySelector('#wizard-form');
const fieldsets = form.querySelectorAll('fieldset');

const reasonSpan = document.querySelector('#reason-span');
const nameSpan = document.querySelector('#name-span');
const emailSpan = document.querySelector('#email-span');
const messageSpan = document.querySelector('#message-span');
const marketingSpan = document.querySelector('#marketing-span');

// hide all fieldsets except the first one
for (let i = 1; i < fieldsets.length; i++) {
  fieldsets[0].style.display = 'block';
  fieldsets[i].style.display = 'none';
}

// add event listeners to next and previous buttons
const nextBtns = form.querySelectorAll('.next-btn');
const prevBtns = form.querySelectorAll('.prev-btn');

for (let i = 0; i < nextBtns.length; i++) {
  nextBtns[i].addEventListener('click', nextStep);
}

for (let i = 0; i < prevBtns.length; i++) {
  prevBtns[i].addEventListener('click', prevStep);
}

// add event listener to form
form.addEventListener('submit', submitForm);

// function to go to next step
function nextStep(event) {
  event.preventDefault();
  for (let i = 0; i < fieldsets.length; i++) {
    if (fieldsets[i].style.display === 'block') {
      fieldsets[i].style.display = 'none';
      fieldsets[i + 1].style.display = 'block';
      break;
    }
  }
}

// function to go to previous step
function prevStep(event) {
  event.preventDefault();
  for (let i = 0; i < fieldsets.length; i++) {
    if (fieldsets[i].style.display == 'block') {
      fieldsets[i].style.display = 'none';
      fieldsets[i - 1].style.display = 'block';
      break;
    }
  }
}

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

  window.location.href = '#summary';
}
