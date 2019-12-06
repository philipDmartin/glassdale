let convictions = []

export const getConvictions = () => {
    return fetch("http://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                console.log("***i provide the data***")
                convictions = parsedConvictions.slice()
            }
        )
        .catch(err => console.log(err))
}

export const useConvictions = () => {
    return convictions
}
