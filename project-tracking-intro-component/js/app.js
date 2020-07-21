const hamburger = document.getElementById('hamburger')
const hamburgerImage = document.getElementById('hamburger-image')
const nav = document.getElementById('mobile-nav')

function showNav() {
  hamburgerImage.src = 'images/icon-close.svg'
  nav.classList.remove('hidden')
}

function hideNav() {
  hamburgerImage.src = 'images/icon-hamburger.svg'
  nav.classList.add('hidden')
}

hamburger.addEventListener('click', () => {
  if (nav.classList.contains('hidden')) {
    showNav()
  } else {
    hideNav()
  }
})
