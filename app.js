const board = document.querySelector('#board')
const SQUARES_NUMBER = 506
const colors = ['#ff2400', '#ff4d00', '#ff4f00', '#edff21', '#ccff00', '#42aaff', '#adff2f', '#e6a8d7', '#8b00ff', '#adff2f', '#ffa812', '#ffcc00', '#ffcf48', '#00bfff', '#87cefa', '#80daeb', '#00ffff', '#fffafa', '#bdecb6']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}


function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  // element.style.backgroundColor = 'red'
  element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
  // element.style.border = `1px solid ${color}`
  // element.style.border = '1px solid orange'
}

function removeColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = 'rgb(44, 42, 40)'
  element.style.boxShadow = '0 0 2px black'
  // element.style.border = `1px solid ${color}`

}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}