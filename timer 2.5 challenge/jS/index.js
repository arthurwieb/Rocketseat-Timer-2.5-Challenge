import {Timer} from "./timer.js"
import Audio from "./audio.js"
import { 

    minutesDisplay,
    secondsDisplay,
 } from "./elements.js"
import Events from "./events.js"

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes
})

const audio = Audio()

Events({timer, audio})

