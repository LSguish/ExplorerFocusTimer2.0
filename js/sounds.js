
export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const bgAudioForest = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Floresta.wav?raw=true")
  const bgAudioRain = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Chuva.wav?raw=true")
  const bgAudioCoffeeMachine = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Cafeteria.wav?raw=true")
  const bgAudioFireplace = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Lareira.wav?raw=true")

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeMachine.loop = true
  bgAudioFireplace.loop = true

  function timeEnd() {
    kitchenTimer.play()
  }

  function pressAudio() {
    buttonPressAudio.play()
  }

  function audioForest() {
    bgAudioForest.play()
    bgAudioRain.pause()
    bgAudioCoffeeMachine.pause()
    bgAudioFireplace.pause()
  }

  function audioRain() {
    bgAudioRain.play()
    bgAudioForest.pause()
    bgAudioCoffeeMachine.pause()
    bgAudioFireplace.pause()
  }

  function audioCoffee() {
    bgAudioCoffeeMachine.play()
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioFireplace.pause()
  }

  function audioFire() {
    bgAudioFireplace.play()
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioCoffeeMachine.pause()
  }
  
  return {
    audioForest,
    audioRain,
    audioCoffee,
    audioFire,
    bgAudioForest,
    bgAudioRain,
    bgAudioCoffeeMachine,
    bgAudioFireplace,
    pressAudio,
    timeEnd
  }
}

