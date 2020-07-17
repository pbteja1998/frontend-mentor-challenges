const hamburgerLink = document.getElementById('hamburger-link')
const mobileNav = document.getElementById('mobile-nav')
const container = document.getElementById('container')
const footer = document.getElementById('footer')

hamburgerLink.addEventListener('click', (e) => {
  e.preventDefault()
  const hamburgerIcon = document.getElementById('hamburger')
  const HAMBURGER_ICON_SRC = "images/icon-hamburger.svg"
  const CLOSE_ICON_SRC = "images/icon-close.svg"
  if (mobileNav.classList.contains('hidden')) {
    hamburgerIcon.src = CLOSE_ICON_SRC
    mobileNav.classList.remove('hidden')
    container.classList.add('hidden')
    footer.classList.add('hidden')
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
  } else {
    hamburgerIcon.src = HAMBURGER_ICON_SRC
    mobileNav.classList.add('hidden')
    container.classList.remove('hidden')
    footer.classList.remove('hidden')
    document.getElementsByTagName('body')[0].style.overflowY = 'auto'
  }
})
