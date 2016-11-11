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
    slowLight.style = 'background-color: orange'
  }
  const setBlack = () => {
    slowLight.style = 'background-color: black'
  }
  const setRed = () => {
    stopLight.style = 'background-color: red'
  }
  const stopButton = document.getElementById('stopButton')
  const stopLight = document.getElementById('stopLight')
  const slowButton = document.getElementById('slowButton')
  const slowLight = document.getElementById('slowLight')
  const goButton = document.getElementById('goButton')
  const goLight = document.getElementById('goLight')
  const buttons = document.querySelectorAll('h1')
  let redCounter = 0
  let slowCounter = 0
  let goCounter = 0
  stopButton.addEventListener('click', () => {
    redCounter += 1
    if (redCounter % 2 === 1) {
      stopLight.style = 'background-color: red'
      goLight.style = 'background-color: black'
      slowLight.style = 'background-color: black'
    } else {
      stopLight.style = 'background-color: black'
    }
  })
  slowButton.addEventListener('click', () => {
    slowCounter += 1
    if (slowCounter % 2 === 1) {
      slowLight.style = 'background-color: orange'
      stopLight.style = 'background-color: black'
      goLight.style = 'background-color: black'
    } else {
      slowLight.style = 'background-color: black'
    }
  })
  goButton.addEventListener('click', () => {
    goCounter += 1
    if (goCounter % 2 === 1) {
      goLight.style = 'background-color: green'
      stopLight.style = 'background-color: black'
      slowLight.style = 'background-color: black'
    } else {
      goLight.style = 'background-color: black'
      setOrange()
      setTimeout(setBlack, 5000)
      setTimeout(setRed, 5000)
    }
  })
  stopButton.addEventListener('mouseover', () => {
    console.log(`Entered stop button.`)
  })
  slowButton.addEventListener('mouseover', () => {
    console.log(`Entered slow button.`)
  })
  goButton.addEventListener('mouseover', () => {
    console.log(`Entered go button.`)
  })
  stopButton.addEventListener('mouseout', () => {
    console.log(`Left stop button.`)
  })
  slowButton.addEventListener('mouseout', () => {
    console.log(`Left slow button.`)
  })
  goButton.addEventListener('mouseout', () => {
    console.log(`Left go button.`)
  })
  for (const button of buttons) {
    button.addEventListener('click', (e) => {
      console.log(`You clicked ${button.textContent}`)
    })
  }
})()
