window.onload = function () {
  const shareButton = document.getElementById('share')
  const shareMobileButton = document.getElementById('share__mobile')
  function toggleShareOptions() {
    const shareOptions = document.getElementById('share__options')
    if (shareOptions.classList.contains('hidden')) {
      shareOptions.classList.remove('hidden')
    } else {
      shareOptions.classList.add('hidden')
    }
  }
  shareButton.addEventListener('click', function () {
    toggleShareOptions()
  })
  shareMobileButton.addEventListener('click', function () {
    toggleShareOptions()
  })
}
