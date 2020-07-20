const toggleButton = document.getElementById('toggle-button')
const annualPrices = document.querySelectorAll('.annual')
const monthlyPrices = document.querySelectorAll('.month')

function showMonthlyPrices() {
  annualPrices.forEach((price) => {
    price.classList.add('hidden')
  })
  monthlyPrices.forEach((price) => {
    price.classList.remove('hidden')
  })
}

function showAnnualPrices() {
  annualPrices.forEach((price) => {
    price.classList.remove('hidden')
  })
  monthlyPrices.forEach((price) => {
    price.classList.add('hidden')
  })
}

if (toggleButton.checked) {
  showMonthlyPrices()
} else {
  showAnnualPrices()
}

toggleButton.addEventListener('input', () => {
  const monthly = toggleButton.checked
  if (monthly) {
    showMonthlyPrices()
  } else {
    showAnnualPrices()
  }
})

window.addEventListener('keydown', (e) => {
  console.log(e.key)
  if (e.key === 'ArrowLeft') {
    toggleButton.checked = false
    showAnnualPrices()
  } else if (e.key === 'ArrowRight') {
    toggleButton.checked = true
    showMonthlyPrices()
  }
})
