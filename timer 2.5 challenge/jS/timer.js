export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes
}) {

    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }
    
    function resetTimer () {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    

    function countdown(){
        timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            if (minutes <= 0 && seconds <= 0) {
                return
            }

            if (seconds <= 0 ) {
                seconds = 60
                --minutes
            }

            if (minutes < 0) {
                return updateTimerDisplay(0, 0) 
            }
            updateTimerDisplay(minutes, String(seconds -1 ))

            countdown()
        }, 1000)

    }

    return {
        countdown,
        resetTimer
    }

}
