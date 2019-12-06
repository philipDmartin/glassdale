import { getCriminals } from './criminals/CriminalsDataProvider.js'
import {CriminalsListComponent} from './criminals/criminalsList.js'
import { getConvictions } from './convictions/convictionsDataProvider.js'
import ConvictionSelect from './convictions/convictionsSelect.js'

getCriminals().then(
    () => CriminalsListComponent()
)

getConvictions().then(
    () => ConvictionSelect()
)




console.log("***i load data***")