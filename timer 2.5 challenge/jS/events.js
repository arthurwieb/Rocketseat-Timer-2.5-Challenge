import {
    buttonPlay,
    buttonStop,
    addTime,
    removeTime,
    minutesDisplay,
    buttonCoffee,
    buttonRain,
    buttonForest,
    buttonFire,
    forestBg,
    forestFill,
    rainBg,
    rainFill,
    coffeeBg,
    coffeeFill,
    fireBg,
    fireFill
} from "./elements.js"

export default function ({timer, audio}) {

    // function turnOff () {
    //     coffeeBg.classList.remove('bgOn')
    //     coffeeFill.classList.remove('fillOn')
    //     coffeeBg.classList.add('bgOff')
    //     coffeeFill.classList.add('fillOff')
        
    //     rainBg.classList.add('bgOff')
    //     rainFill.classList.add('fillOff')
        
    //     forestBg.classList.add('bgOff')
    //     forestFill.classList.add('fillOff')
        
    //     fireBg.classList.add('bgOff')
    //     fireFill.classList.add('fillOff')
    // }

    function turnOn (moodBg, moodFill) {
        moodBg.classList.toggle('bgOn')
        moodBg.classList.toggle('bgOff')
        moodFill.classList.toggle('fillOn')
        moodFill.classList.toggle('fillOff')
        console.log('oi')
    }


  

    function togglePlay(myAudio) {
        // const audios = [
        //     audio.Forest,
        //     audio.Rain,
        //     audio.Fire,
        //     audio.Coffee
        // ]
        
        // for (let i = 0; i < audios.length; i++) {
        //     if (audios[i] !== myAudio) {
        //         audios[i].pause()
        //     }
        // }
        
    // se quiser somente 1 audio tocando simultaneamente

    return myAudio.paused ? myAudio.play() : myAudio.pause();
    };

    let minutes = Number(minutesDisplay.textContent)

    buttonPlay.addEventListener('click', function(){
        
        timer.countdown()
    })

    buttonStop.addEventListener('click', function(){
        
        timer.resetTimer()
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        
    })

    addTime.addEventListener('click', function(){
        // isFinished(minutesDisplay.textContent)
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
        minutes = minutesDisplay.textContent
    })

    removeTime.addEventListener('click', function(){
        if (minutesDisplay.textContent > 0) {
            minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
            minutes = minutesDisplay.textContent
        } else {
            return 
        }
    })

    buttonCoffee.addEventListener('click', function(){
        togglePlay(audio.Coffee)
        turnOn(coffeeBg, coffeeFill)
    })

    buttonRain.addEventListener('click', function(){
        togglePlay(audio.Rain)
        turnOn(rainBg, rainFill)
    })

    buttonForest.addEventListener('click', function(){
        togglePlay(audio.Forest)
        turnOn(forestBg, forestFill)
       
    })

    buttonFire.addEventListener('click', function(){
        togglePlay(audio.Fire)
        turnOn(fireBg, fireFill)
    })
}