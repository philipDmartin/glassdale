let criminals = []

export const getCriminals = () => {
    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {

                criminals = parsedCriminals.slice()
                console.log(criminals)
            }
        )
}

export const useCriminals = () => {
    return criminals
}
