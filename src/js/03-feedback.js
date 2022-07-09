import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.elements[(name = 'email')];
const textEl = formEl.elements[(name = 'message')];
const KEY_FEEDBACK = 'feedback-form-state';
const formData = {
  email: null,
  message: null,
};
formData.email = JSON.parse(localStorage.getItem(KEY_FEEDBACK)).email;
formData.message = JSON.parse(localStorage.getItem(KEY_FEEDBACK)).message;
const userEp = () => {
  if (localStorage.length === 0) return;
  if (JSON.parse(localStorage.getItem(KEY_FEEDBACK)).email) {
    emailEl.value = JSON.parse(localStorage.getItem(KEY_FEEDBACK)).email;
  } else {
    emailEl.value = ' ';
  }
  if (JSON.parse(localStorage.getItem(KEY_FEEDBACK)).message) {
    textEl.value = JSON.parse(localStorage.getItem(KEY_FEEDBACK)).message;
  } else {
    textEl.value = ' ';
  }
};

const onInputValuePush = evt => {
  const emailValue = evt.target.value;

  formData.email = emailValue;
  localStorage.setItem(KEY_FEEDBACK, JSON.stringify(formData));
};

const onTextareaInput = evt => {
  const textValue = evt.target.value;
  formData.message = textValue;
  localStorage.setItem(KEY_FEEDBACK, JSON.stringify(formData));
};
const formReseter = () => {
  localStorage.removeItem(KEY_FEEDBACK);
  formEl.reset();
};
const onSubmitbtnReset = evt => {
  evt.preventDefault();
  formReseter();
  console.log(formData);
};

emailEl.addEventListener('input', throttle(onInputValuePush, 500));
textEl.addEventListener('input', throttle(onTextareaInput, 500));
formEl.addEventListener('submit', onSubmitbtnReset);
userEp();
