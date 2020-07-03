window.onload = function () {
  const submitButton = document.getElementById('submit')

  function addFieldEmptyErrorMessage(element, field) {
    element.innerText = `${field} cannot be empty`
  }

  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  submitButton.addEventListener('click', function () {
    const firstNameInput = document.getElementById('firstName')
    const firstNameError = document.getElementById('firstNameError')
    const firstNameErrorIcon = document.getElementById('firstNameErrorIcon')

    const lastNameInput = document.getElementById('lastName')
    const lastNameError = document.getElementById('lastNameError')
    const lastNameErroIcon = document.getElementById('lastNameErrorIcon')

    const emailInput = document.getElementById('email')
    const emailError = document.getElementById('emailError')
    const emailErrorIcon = document.getElementById('emailErrorIcon')

    const passwordInput = document.getElementById('password')
    const passwordError = document.getElementById('passwordError')
    const passwordErrorIcon = document.getElementById('passwordErrorIcon')

    let isFirstNameValid = false
    let isLastNameValid = false
    let isEmailValid = false
    let isPasswordValid = false

    if (firstNameInput.value === '') {
      isFirstNameValid = false
      firstNameError.classList.remove('hidden')
      firstNameErrorIcon.classList.remove('hidden')
      firstNameInput.classList.add('error-border')
      firstNameInput.placeholder = ""
      addFieldEmptyErrorMessage(firstNameError, 'First Name')
    } else {
      isFirstNameValid = true
      firstNameInput.classList.remove('error-border')
      firstNameError.classList.add('hidden')
      firstNameErrorIcon.classList.remove('hidden')
      firstNameErrorIcon.classList.add('hidden')
    }

    if (lastNameInput.value === '') {
      isLastNameValid = false
      lastNameError.classList.remove('hidden')
      lastNameErroIcon.classList.remove('hidden')
      lastNameInput.classList.add('error-border')
      lastNameInput.placeholder = ""
      addFieldEmptyErrorMessage(lastNameError, 'Last Name')
    } else {
      isLastNameValid = true
      lastNameInput.classList.remove('error-border')
      lastNameError.classList.add('hidden')
      lastNameErroIcon.classList.add('hidden')
    }

    if (emailInput.value === '') {
      isEmailValid = false
      emailError.classList.remove('hidden')
      emailErrorIcon.classList.remove('hidden')
      emailInput.classList.add('error-border')
      emailInput.placeholder = ""
      addFieldEmptyErrorMessage(emailError, 'Email')
    } else {
      if (isValidEmail(emailInput.value)) {
        isEmailValid = true
        emailInput.classList.remove('error-border')
        emailError.classList.add('hidden')
        emailErrorIcon.classList.add('hidden')
      } else {
        isEmailValid = false
        emailError.classList.remove('hidden')
        emailErrorIcon.classList.remove('hidden')
        emailInput.classList.add('error-border')
        emailInput.placeholder = ""
        emailError.innerText = 'Looks like this is not an email'
      }
    }

    if (passwordInput.value === '') {
      isPasswordValid = false
      passwordError.classList.remove('hidden')
      passwordErrorIcon.classList.remove('hidden')
      passwordInput.classList.add('error-border')
      passwordInput.placeholder = ""
      addFieldEmptyErrorMessage(passwordError, 'Password')
    } else {
      isPasswordValid = true
      passwordInput.classList.remove('error-border')
      passwordError.classList.add('hidden')
      passwordErrorIcon.classList.add('hidden')
    }

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
      firstNameInput.value = ""
      lastNameInput.value = ""
      emailInput.value = ""
      passwordInput.value = ""
      const successElement = document.getElementById('success')
      successElement.classList.remove('hidden')
    }
  })
}
