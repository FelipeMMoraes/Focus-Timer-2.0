import Sound from './sounds.js'
import Timer from './timer.js'
import Controls from './controls.js'
import { Events } from './events.js';
import {
  btnPlay,
  btnPause,
  minutesDisplay,
  secondsDisplay,
} from './elements.js';

let timeTimerOut;
const sounds = Sound()
const controls = Controls({
  btnPlay,
  btnPause,
})

const { playSound, onChangeVolume } = sounds

/*Theme */
const selectTheme = document.querySelector('#select-theme')
const lightTheme = document.querySelector('.light-theme')
const darkTheme = document.querySelector('.dark-theme')

selectTheme.addEventListener('click', () => {
  const body = document.querySelector('body')
  body.classList.toggle('dark-mode')
  lightTheme.classList.toggle('hide')
  darkTheme.classList.toggle('hide')
} )

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls: controls.reset,
})

Events({controls, timer, sounds})

/*Btn Sounds */
const buttonsSound = document.querySelectorAll('.sounds > button')

buttonsSound.forEach((button) => {
  const input = button.querySelector('input')

  button.addEventListener('click', playSound)
  input.addEventListener('mousemove', onChangeVolume)
});
