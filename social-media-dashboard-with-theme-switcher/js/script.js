const toggleButton = document.getElementById('toggle-button')
const root = document.documentElement;

function setRootVariables(isDarkMode) {
  let bg, topBgPattern, cardBg, cardBgHover, normalText, headingText
  if (isDarkMode) {
    bg = 'hsl(230, 17%, 14%)'
    topBgPattern = 'hsl(232, 19%, 15%)'
    cardBg = 'hsl(228, 28%, 20%)'
    cardBgHover = 'hsl(228, 26%, 27%)'
    normalText = 'hsl(228, 34%, 66%)'
    headingText = 'hsl(0, 0%, 100%)'
  } else {
    bg = 'hsl(0, 0%, 100%)'
    topBgPattern = 'hsl(225, 100%, 98%)'
    cardBg = 'hsl(227, 47%, 96%)'
    cardBgHover = 'hsl(232, 33%, 91%)'
    normalText = 'hsl(228, 12%, 44%)'
    headingText = 'hsl(230, 17%, 14%)'
  }
  root.style.setProperty('--BG', bg);
  root.style.setProperty('--Top-BG-Pattern', topBgPattern);
  root.style.setProperty('--Card-BG', cardBg);
  root.style.setProperty('--Card-BG-Hover', cardBgHover);
  root.style.setProperty('--Normal-Text', normalText);
  root.style.setProperty('--Heading-Text', headingText);
}

setRootVariables(toggleButton.checked)

toggleButton.addEventListener('change', () => {
  const darkMode = toggleButton.checked
  setRootVariables(darkMode)
})
