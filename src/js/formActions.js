const body = document.querySelector('.body');
const form = document.querySelector('.form');
const openFormBtns = document.querySelectorAll('.card__application');
const closeFormBtn = document.querySelector('.form_close');

const formContainer = document.querySelector('.form_container')

const formInputs = document.querySelectorAll('.form_input');
const nameField = document.querySelector('.name_input');
const phoneField = document.querySelector('.phone_input');
const personalDataField = document.querySelector('.form_footer_checkbox');
const formBtn = document.querySelector('.form_footer_button');

function openForm() {
  form.classList.add('form_visible');
  body.style.overflow = 'hidden'
}

function closeForm() {
  form.classList.remove('form_visible');
  body.style.overflow = ''
}

function disabledDelay(delay) {
  setTimeout(() => {
    formBtn.classList.remove('btn-disabled');
    formBtn.removeAttribute('disabled')
  }, delay)
}

function formInputValidation() {
  const errorMessageName = document.querySelector('.name_input-error');
  const errorMessagePhone = document.querySelector('.phone_input-error');
  const personalData = document.querySelector('.form_footer_personal')

  const nameValidationSсhema = /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё0-9]*$/
  let isValidName = false;
  let isValidPhone = false;
  let isCheckedPersonalData = personalDataField.checked;

  if (nameField.value.length <= 2 && !nameValidationSсhema.test(nameField.value)) {
    errorMessageName.style.display = 'block';
    formBtn.classList.add('btn-disabled');
    nameField.classList.add('error');
    formBtn.setAttribute('disabled', true);

    formContainer.style.boxShadow = '5px 5px 20px red, -5px -5px 20px red'

    disabledDelay(2000)
  } else {
    errorMessageName.style.display = 'none';
    nameField.classList.remove('error');
    formContainer.style.boxShadow = 'none'
    isValidName = true;
  }

  if (phoneField.value.trim().length < 12 && phoneField.value !== Number) {
    errorMessagePhone.style.display = 'block';
    formBtn.classList.add('btn-disabled');
    phoneField.classList.add('error');
    formBtn.setAttribute('disabled', true)
    formContainer.style.boxShadow = '5px 5px 20px red, -5px -5px 20px red'
    disabledDelay(2000)
  } else {
    errorMessagePhone.style.display = 'none';
    phoneField.classList.remove('error');
    formContainer.style.boxShadow = 'none'
    isValidPhone = true;
  }

  if (!isCheckedPersonalData) {
    personalData.classList.add('error_text');
    formContainer.style.boxShadow = '5px 5px 20px red, -5px -5px 20px red' 
  } else {
    personalData.classList.remove('error_text');
    formContainer.style.boxShadow = 'none'
  }

  return {
    isValidName, isValidPhone, isCheckedPersonalData
  }

}

function submiteForm(e) {
  e.preventDefault();

  const { isValidName, isValidPhone, isCheckedPersonalData } = formInputValidation();

  if (!isValidName) {
    console.error('Не введено имя пользователя')
  }

  if (!isValidPhone) {
    console.error('Введен не корректный номер телефона')
  }

  if (isValidName && isValidPhone && isCheckedPersonalData) {
    const data = new FormData();

    data.name = nameField.value;
    data.phone = phoneField.value;
    data.personal = personalDataField.checked;
    closeForm();
    nameField.value = '';
    phoneField.value = '';
    personalDataField.checked = false;
  }

}

openFormBtns.forEach(openBtn => openBtn.addEventListener('click', openForm));
closeFormBtn.addEventListener('click', closeForm);
form.addEventListener('submit', submiteForm);
document.addEventListener('keydown', (event) => {
  event.code === `Escape` ? closeForm() : null
})