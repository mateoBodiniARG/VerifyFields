const formName = document.getElementById("form-name");
const nameError = document.getElementById("name-error");

const formLastName = document.getElementById("form-lastName");
const lastNameError = document.getElementById("last-name-error");

const formEmail = document.getElementById("form-email");
const emailError = document.getElementById("email-error");
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formPassword = document.getElementById('password');
const passError = document.getElementById('password-text-error')
const passVerify = document.getElementById('passwordLengthVerify')

const subscribeNotification = document.getElementById('subscribe-notification');

const btn = document.getElementById("buttonSubmit");

const checkField = (field, errorElement, regExp) => {
  const value = field.value.trim();
  if (!value) {
    field.classList.add("error");
    errorElement.classList.remove("hidden");
    return false;
    
  } else if (regExp && !regExp.test(value)) {
    field.classList.add("error");
    errorElement.classList.remove("hidden");
    return false;
  } else {
    field.classList.add("succses");
    field.classList.remove("error");
    errorElement.classList.add("hidden");
    return true;
  }
};

const verifyPass = () => { 
  const valPass = formPassword.value.trim()
  if(valPass.length < 8 ){
    formPassword.classList.remove('succses')
    formPassword.classList.add("errorLength");
    passVerify.classList.remove("hidden2");
    return false;
  } else {
    formPassword.classList.add("succses");
    formPassword.classList.remove("errorLength");
    passVerify.classList.add("hidden2");
    return true;
  }
}


btn.addEventListener("click", (e) => {
  e.preventDefault();
  const isPassValid = checkField(formPassword, passError);
  const isNameValid = checkField(formName, nameError);
  const isLastNameValid = checkField(formLastName, lastNameError);
  const isEmailValid = checkField(formEmail, emailError, emailReg);
  const passLength = verifyPass()

if (isPassValid && isNameValid && isLastNameValid && isEmailValid && passLength) {
    subscribeNotification.classList.add('show');
    setTimeout(() => {
      subscribeNotification.classList.remove('show');
    }, 3000);
  }
});
