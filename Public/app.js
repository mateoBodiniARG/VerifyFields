const formName = document.getElementById("form-name");
const nameError = document.getElementById("name-error");

const formLastName = document.getElementById("form-lastName");
const lastNameError = document.getElementById("last-name-error");

const formEmail = document.getElementById("form-email");
const emailError = document.getElementById("email-error");
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formPassword = document.getElementById('password');
const passError = document.getElementById('password-text-error')
const lengthPass = document.getElementById('passwordLengthVerify')

const btn = document.getElementById("buttonSubmit");

const checkField = (field, errorElement, regExp,) => {
  const value = field.value.trim();
  if (!value) {
    field.classList.add("error");
    errorElement.classList.remove("hidden");
    return false;
    
  }else if (value,length <= 8){
    field.classList.remove('hidden2')
   console.log('hola')
  }
  else if (regExp && !regExp.test(value)) {
    field.classList.add("error");
    errorElement.classList.remove("hidden");
    return false;
  }
  else {
    field.classList.add("succses");
    field.classList.remove("error");
    errorElement.classList.add("hidden");
    return true;
  }
};



btn.addEventListener("click", (e) => {
  e.preventDefault();
  const isPassValid = checkField(formPassword, passError, lengthPass);
  const isNameValid = checkField(formName, nameError);
  const isLastNameValid = checkField(formLastName, lastNameError);
  const isEmailValid = checkField(formEmail, emailError, emailReg);

  if (isNameValid && isLastNameValid && isEmailValid && isPassValid) {
    console.log('hola')
  }
});
