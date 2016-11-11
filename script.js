/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

(function () {
  'use strict'
  const setOrange = () => {
    if (slowLight.style.backgroundColor === 'orange') {
      
    }
    slowLight.style = 'background-color: orange'
  }
  const setBlack = () => {
    slowLight.style = 'background-color: black'
    stopLight.style = 'background-color: black'
    goLight.style = 'background-color: black'
  }
  const setRed = () => {
    stopLight.style = 'background-color: red'
    slowLight.style = 'background-color: black'
    goLight.style = 'background-color: black'
  }
  const setGreen = () => {
    goLight.style = 'background-color: green'
  }
  const stopButton = document.getElementById('stopButton')
  const stopLight = document.getElementById('stopLight')
  const slowButton = document.getElementById('slowButton')
  const slowLight = document.getElementById('slowLight')
  const goButton = document.getElementById('goButton')
  const goLight = document.getElementById('goLight')
  const buttons = document.querySelectorAll('h1')
  stopButton.addEventListener('click', () => {
    if (stopLight.style.backgroundColor === 'red') {
      setBlack()
    } else {
      setRed()
    }
  })
  slowButton.addEventListener('click', () => {

  })
  goButton.addEventListener('click', () => {
    if (goLight.style.backgroundColor === 'green') {
      setBlack()
      setOrange()
      setTimeout(setRed, 3000)
    } else {
    setGreen()
    slowLight.style = 'background-color: black'
    stopLight.style = 'background-color: black'
    }
  })
  for (const button of buttons) {
    button.addEventListener('click', (e) => {
      console.log(`You clicked ${button.textContent}`)
    })
    button.addEventListener('mouseenter', (e) => {
      console.log(`You entered ${button.textContent}`)
    })
    button.addEventListener('mouseleave', (e) => {
      console.log(`You left ${button.textContent}`)
    })
  }
})()
