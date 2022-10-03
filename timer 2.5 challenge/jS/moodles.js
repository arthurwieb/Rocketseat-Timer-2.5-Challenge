import Audio from "./audio.js"

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('coffee')
const buttonFire = document.querySelector('.fire')

const audio = Audio()

buttonForest.addEventListener('click', function(){
    audio.Coffee.play()
    console.log('click')
})