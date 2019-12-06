const CriminalsComponent = (criminals) => {
   return `
   
        <section class="criminals">
            <div class="criminals__name">
            <h1>${criminals.name}</h1>
            </div>
                <div>age: ${criminals.age}</div>
                <div>crime: ${criminals.conviction}</div>
                <div>termStart: ${new Date(criminals.incarceration.start).toLocaleDateString('en-US')}</div>
                <div>term end: ${new Date(criminals.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>

    `
}
console.log("***i rendure html through javascript***")

export default CriminalsComponent
