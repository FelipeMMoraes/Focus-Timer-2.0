export default function Sound(){
  const soundForest = new Audio('./assets/sounds/Floresta.wav');

  const soundRain = new Audio('./assets/sounds/Chuva.wav')
  
  const soundCoffe = new Audio('./assets/sounds/Cafeteria.wav')

  const soundFirePlace = new Audio('./assets/sounds/Lareira.wav')

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const soundAlert = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')

  const volForest = document.querySelector('#volForest');
  const volRain = document.querySelector('#volRain');
  const volCoffeShop = document.querySelector('#volCoffeeShop');
  const volFireplace = document.querySelector('#volFireplace');


  function pressButtonForest(e){
    if(e.target.classList.contains('active')){
      soundForest.pause()
      e.target.classList.remove('active')
      volForest.classList.remove('active')
    }
    else{
      soundForest.play()
      soundForest.loop = true;
      soundForest.volume = volForest.value;
      e.target.classList.add('active')
      volForest.classList.add('active')
    }
  }

  function pressButtonRain(e){
    if(e.target.classList.contains('active')){
      soundRain.pause()
      e.target.classList.remove('active')
      volRain.classList.remove('active')
    }
    else{
      soundRain.play()
      soundRain.loop = true;
      soundRain.volume = volRain.value;
      e.target.classList.add('active')
      volRain.classList.add('active')
    }	
  }

  function pressButtonCoffeShop(e){
    if(e.target.classList.contains('active')){
      soundCoffe.pause()
      e.target.classList.remove('active')
      volCoffeShop.classList.remove('active')
    }
    else{
      soundCoffe.play()
      soundCoffe.loop = true;
      soundCoffe.volume = volCoffeShop.value;
      e.target.classList.add('active')
      volCoffeShop.classList.add('active')
    }
  }

  function pressButtonFirePlace(e){
    if(e.target.classList.contains('active')){
      soundFirePlace.pause()
      e.target.classList.remove('active')
      volFireplace.classList.remove('active')
    }
    else{
      soundFirePlace.play()
      soundFirePlace.loop = true;
      soundFirePlace.volume = volFireplace.value;
      e.target.classList.add('active')
      volFireplace.classList.add('active')
    }
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
    pressButtonForest,
    pressButtonRain,
    pressButtonCoffeShop,
    pressButtonFirePlace,
    pressButton,
    kitchenTimerAudio,
    alertAudio
  }
}