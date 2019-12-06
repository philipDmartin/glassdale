import { useConvictions } from "./convictionsDataProvider.js"

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

const ConvictionSelect = () => {
    const convictions = useConvictions()    

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropDown")) {
            const selectedConvictions = changeEvent.target.value

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedConvictions
                }
            })

            eventHub.dispatchEvent(message)
        }
    })

    const render = convictionsCollection => {
        contentTarget.innerHTML = `
            <select class="dropDown" id="crimeSelect">
                ${
                    convictions.map(conviction =>
                        `<option  value="${conviction}">things not to do... ${conviction}</option>`
                    )
                }

            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect
