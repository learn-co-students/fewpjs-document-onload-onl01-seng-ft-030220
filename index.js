// Your code goes here
const changeText = () => {
  document.getElementById('text').innerHTML = 'This is really cool!'
}

document.addEventListener('DOMContentLoaded', (e) => {
  changeText()
})