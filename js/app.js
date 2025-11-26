document.addEventListener('DOMContentLoaded', () => {
  const sidenav = document.getElementById('mySidenav')
  const menuToggle = document.getElementById('menuToggle')
  const closeBtn = document.querySelector('.sidenav .closebtn')

  if (menuToggle && sidenav) {
    menuToggle.addEventListener('click', () => {
      sidenav.classList.add('open')
    })
  }

  if (closeBtn && sidenav) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault()
      sidenav.classList.remove('open')
    })
  }

  const popup = document.getElementById('popup')
  const popupClose = document.querySelector('.popup-close-btn')
  if (popup) {
    setTimeout(() => popup.classList.add('show'), 200)
    if (popupClose) {
      popupClose.addEventListener('click', (e) => {
        e.preventDefault()
        popup.classList.remove('show')
      })
    }
    popup.addEventListener('click', (e) => {
      if (e.target === popup) popup.classList.remove('show')
    })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') popup.classList.remove('show')
    })
  }
})
