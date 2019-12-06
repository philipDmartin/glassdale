import { useCriminals } from './CriminalsDataProvider.js'
import CriminalsComponent from './Criminals.js'

const contentElement = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector('.container')

export const CriminalsListComponent = () => {
  const criminalsCollection = useCriminals()

  eventHub.addEventListener('crimeSelected', event => {

    const matchingCriminals = criminalsCollection.filter(currentCriminals => {
      if (currentCriminals.conviction === event.detail.crime) return currentCriminals
    })
    render(matchingCriminals)
  })

  const render = crimes => {
    contentElement.innerHTML = `
        <section class="CriminalsList">
        ${crimes
    .map(currentCriminals => {
      return CriminalsComponent(currentCriminals)
    })
    .join('')}
        </section>
        `
  }

  render(criminalsCollection)
}
