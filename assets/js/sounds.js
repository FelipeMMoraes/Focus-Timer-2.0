export default function Sound(){
  const soundForest = new Audio('./assets/sounds/Floresta.wav');

  const soundRain = new Audio('./assets/sounds/Chuva.wav')
  
  const soundCoffe = new Audio('./assets/sounds/Cafeteria.wav')

  const soundFirePlace = new Audio('./assets/sounds/Lareira.wav')

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const soundAlert = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')

  const sounds = {
    forest: soundForest,
    rain: soundRain,
    coffe: soundCoffe,
    fireplace: soundFirePlace
  }

  function playSound(event) {
    const parentButton = event.target.closest('button')
    const buttonId = parentButton.id
    const inputRange = parentButton.querySelector('input')

    if (event.target === inputRange) {
      return
    }

    parentButton.classList.toggle('active')

    if (parentButton.classList.contains('active')) {
      sounds[buttonId].play()
      sounds[buttonId].loop = true
    } else {
      sounds[buttonId].pause()
    }
  }



  function onChangeVolume(event) {
    const parentButton = event.target.closest('button')
    const buttonId = parentButton.id

    if (event.target.value == 0) {
      parentButton.classList.remove('active')
      sounds[buttonId].pause()
    }

    sounds[buttonId].volume = event.target.value
  }

  function pressButton(){
    buttonPressAudio.play()
  }

  function kitchenTimerAudio(){
    kitchenTimer.play()
  }

  function alertAudio(){
    soundAlert.play()
  }
  

  return{
    pressButton,
    kitchenTimerAudio,
    alertAudio,
    playSound,
    onChangeVolume
  }
}