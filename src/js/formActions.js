const body = document.querySelector('.body');
const form = document.querySelector('.form');
const openFormBtns = document.querySelectorAll('.card_application');
const closeFormBtn = document.querySelector('.form_close');


const formInputs = document.querySelectorAll('.form_input');
const nameField = document.querySelector('.name_input');
const phoneField = document.querySelector('.phone_input');
const personalDataField = document.querySelector('.form_footer_checkbox');
const formBtn = document.querySelector('.form_footer_button');

function openForm() {
  const topOffset = window.pageYOffset;
  form.classList.remove('hide-form');
  form.style.top = `${topOffset}px`;
  body.style.overflow = 'hidden'
}

function closeForm() {
  form.classList.add('hide-form');
  body.style.overflow = ''
}

function disabledDelay(delay) {
  setTimeout(() => {
    formBtn.classList.remove('btn-disabled');
  }, delay)
} 


function formInputValidation() {
  const errorMessageName = document.querySelector('.name_input-error');
  const errorMessagePhone = document.querySelector('.phone_input-error');

  let isValidName = false;
  let isValidPhone = false;

  if (nameField.value.length === 0) {
    errorMessageName.style.display = 'block';
    formBtn.classList.add('btn-disabled');
    nameField.classList.add('error');
     disabledDelay(2000)
  } else {
    errorMessageName.style.display = 'none';
    nameField.classList.remove('error');
    isValidName = true;
   
  }


  if (phoneField.value.length < 12 && phoneField.value !== Number) {
    errorMessagePhone.style.display = 'block';
    formBtn.classList.add('btn-disabled');
    phoneField.classList.add('error');
    disabledDelay(2000)
  } else {
    errorMessagePhone.style.display = 'none';
    phoneField.classList.remove('error');
    isValidPhone = true;
    
  }

  console.log(personalDataField.value)

  return {
    isValidName, isValidPhone
  }

}

function submiteForm(e) {
  e.preventDefault();

  const { isValidName, isValidPhone } = formInputValidation();

  if (!isValidName) {
    console.error('Не введено имя пользователя')
  }

  if (!isValidPhone) {
    console.error('Введен не корректный номер телефона')
  }

  if (isValidName && isValidPhone) {
    const data = new FormData();

    data.name = nameField.value;
    data.phone = phoneField.value;


    console.log(data)
  }

  // formInputValidation();
  // const data = new FormData();

  // data.name = nameField.value;
  // data.phone = phoneField.value;

}

openFormBtns.forEach(openBtn => openBtn.addEventListener('click', openForm));
closeFormBtn.addEventListener('click', closeForm);
form.addEventListener('submit', submiteForm);





