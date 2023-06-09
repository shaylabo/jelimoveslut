const publicDate = document.querySelectorAll('.publicDate')
const dateSpan = document.querySelectorAll('.currentDate')
const currYear = document.querySelectorAll('.currYear')
const leftPlace = document.querySelectorAll('.leftPlace')

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('cs', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
})
dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('cs', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})
currYear.forEach(item => {
  item.innerHTML = new Date().getFullYear()
})
const left = Math.floor(Math.random() * (15 - 5) + 5)
leftPlace.forEach(item => {
  item.innerHTML = left
})