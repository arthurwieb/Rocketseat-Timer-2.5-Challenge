export default function () {
    const Forest = new Audio("/sounds/Floresta.wav")
    const Coffee = new Audio("/sounds/Cafeteria.wav") 
    const Fire = new Audio("/sounds/Lareira.wav")
    const Rain = new Audio("/sounds/Chuva.wav")

   

    return {
        Forest,
        Coffee,
        Fire,
        Rain
    }
}