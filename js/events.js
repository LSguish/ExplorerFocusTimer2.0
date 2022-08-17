import { Elements } from "./elements.js";

const {
  buttonForest,
  buttonRain,
  buttonCoffeeMachine,
  buttonFireplace,
  volForest,
  volRain,
  volCoffee,
  volFire
} = Elements

export default function() {

  function validationVolForest(sounds) {
    if(buttonForest.classList.contains('check')) {
      sounds.audioForest(volForest)
    } else {
      sounds.bgAudioForest.pause()
    }
  }
  
  function validationVolRain(sounds) {
    if(buttonRain.classList.contains('check')) {
      sounds.audioRain(volRain)
    } else {
      sounds.bgAudioRain.pause()
    }
  }
  
  function validationVolCoffee(sounds) {
    if(buttonCoffeeMachine.classList.contains('check')) {
      sounds.audioCoffee(volCoffee)
    } else {
      sounds.bgAudioCoffeeMachine.pause()
    }
  }
  
  function validationVolFire(sounds) {
    if(buttonFireplace.classList.contains('check')) {
      sounds.audioFire(volFire)
    } else {
      sounds.bgAudioFireplace.pause()
    }
  }

  return {
    validationVolForest,
    validationVolRain,
    validationVolCoffee,
    validationVolFire
  }
}
