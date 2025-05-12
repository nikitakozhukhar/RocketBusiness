const body = document.querySelector('.body');
const form = document.querySelector('.form');
const openFormBtns = document.querySelectorAll('.card__application');
const closeFormBtn = document.querySelector('.form_close');
const formContainer = document.querySelector('.form_container');

const nameField = document.querySelector('.name_input');
const phoneField = document.querySelector('.phone_input');
const personalDataField = document.querySelector('.form_footer_checkbox');
const formBtn = document.querySelector('.form_footer_button');

const errorMessageName = document.querySelector('.name_input-error');
const errorMessagePhone = document.querySelector('.phone_input-error');
const personalData = document.querySelector('.form_footer_personal');

const nameValidationRegex = /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё0-9]*$/;

const setErrorState = (element, errorElement, condition) => {
  if (condition) {
    element.classList.add('error');
    errorElement.style.display = 'block';
    formBtn.classList.add('btn-disabled');
    formBtn.setAttribute('disabled', true);
    formContainer.style.boxShadow = '5px 5px 20px red, -5px -5px 20px red';
    setTimeout(() => {
      formBtn.classList.remove('btn-disabled');
      formBtn.removeAttribute('disabled');
    }, 2000);
    return false;
  } else {
    element.classList.remove('error');
    errorElement.style.display = 'none';
    formContainer.style.boxShadow = 'none';
    return true;
  }
};

const openForm = () => {
  form.classList.add('form_visible');
  body.style.overflow = 'hidden';
};

const closeForm = () => {
  form.classList.remove('form_visible');
  body.style.overflow = '';
};

const formInputValidation = () => {
  const isValidName = setErrorState(
    nameField,
    errorMessageName,
    nameField.value.length <= 2 || !nameValidationRegex.test(nameField.value)
  );

  const isValidPhone = setErrorState(
    phoneField,
    errorMessagePhone,
    phoneField.value.trim().length < 12 || isNaN(phoneField.value.trim())
  );

  const isCheckedPersonalData = personalDataField.checked;

  if (!isCheckedPersonalData) {
    personalData.classList.add('error_text');
    formContainer.style.boxShadow = '5px 5px 20px red, -5px -5px 20px red';
  } else {
    personalData.classList.remove('error_text');
    formContainer.style.boxShadow = 'none';
  }

  return { isValidName, isValidPhone, isCheckedPersonalData };
};

const submitForm = (e) => {
  e.preventDefault();
  const { isValidName, isValidPhone, isCheckedPersonalData } = formInputValidation();

  if (isValidName && isValidPhone && isCheckedPersonalData) {
    closeForm();
    nameField.value = '';
    phoneField.value = '';
    personalDataField.checked = false;
  }
};

openFormBtns.forEach(btn => btn.addEventListener('click', openForm));
closeFormBtn.addEventListener('click', closeForm);
form.addEventListener('submit', submitForm);
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') closeForm();
});
