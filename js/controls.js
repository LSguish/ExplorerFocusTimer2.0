import { Elements } from "./elements.js";

const {
  buttonPlay,
  buttonPause,
  buttonForest,
  buttonRain,
  buttonCoffeeMachine,
  buttonFireplace,
} = Elements

export function Controls() {
  function playForest() {
    buttonForest.classList.toggle('check')
    buttonRain.classList.remove('check')
    buttonCoffeeMachine.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playRain() {
    buttonRain.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonCoffeeMachine.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playCoffee() {
    buttonCoffeeMachine.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playFire() {
    buttonFireplace.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonCoffeeMachine.classList.remove('check')
  }

  function playTimer() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  return {
    playTimer,
    reset,
    playForest,
    playRain,
    playCoffee,
    playFire,
  }
}

