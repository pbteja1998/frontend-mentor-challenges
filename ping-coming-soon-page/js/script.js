function isValidEmail(email) {
  if (!email) {
    return false
  }
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function subscribe() {
  const emailElement = document.getElementById('email')
  const errorMessageElement = document.getElementById('error-message')
  const successMessageElement = document.getElementById('success-message')
  if (!isValidEmail(emailElement.value)) {
    console.log(emailElement.value, !emailElement.value)
    if (!emailElement.value) {
      errorMessageElement.innerText = "Whoops! It looks like you forgot to add your email"
    } else {
      errorMessageElement.innerText = "Please provide a valid email address"
    }
    emailElement.classList.add('error-input')
    errorMessageElement.classList.remove('hidden')
    successMessageElement.classList.add('hidden')
  } else {
    emailElement.classList.remove('error-input')
    errorMessageElement.classList.add('hidden')
    emailElement.value = ""
    emailElement.blur()
    successMessageElement.classList.remove('hidden')
    setTimeout(function () {
      successMessageElement.classList.add('hidden')
    }, 1000)
  }
}

function submit(event) {
  if (event.keyCode === 13) {
    subscribe()
  }
}
