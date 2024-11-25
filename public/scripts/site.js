const warframesList = document.querySelector('#warframes')
const planetsList = document.querySelector('#planets')

const displayWarframes = async () => {
    const result = await fetch('/api/v1/warframes')
    const warframes = await result.json()
    warframes.forEach(({name, gender, description, image}) => {
        const div = document.createElement('div')
        div.className = 'warframe-elements'

        const warframe = document.createElement('div')
        warframe.className = 'warframe'

        const warframeName = document.createElement('h2')
        warframeName.textContent = name
        warframeName.className = 'warframe-name'
        
        const warframeGender = document.createElement('h3')
        warframeGender.textContent = gender
        warframeGender.className = `${gender}`

        const warframeDescription = document.createElement('fieldset')
        warframeDescription.className = 'warframe-description'
        warframeDescription.innerHTML = "<legend>Description:</legend>"

        const p = document.createElement('p')
        p.textContent = description
        warframeDescription.append(p)

        const warframeImage = document.createElement('img')
        warframeImage.src = image
        warframeImage.alt = `Image of the Warframe ${name}`
        warframeImage.className = 'warframe-image'

        div.append(warframeName)
        div.append(warframeGender)
        div.append(warframeDescription)
        warframe.append(div)
        warframe.append(warframeImage)

        warframesList.append(warframe)
    })
}

const displayPlanets = async () => {
    const result = await fetch('/api/v1/planets')
    const planets = await result.json()
    planets.forEach(({name, faction, description, boss}) => {
        const div = document.createElement('div')

        const planetName = document.createElement('a')
        planetName.textContent = name
        planetName.className = 'planet-name'
        planetName.href = `/planets/${name}`

        const planetEnemies = document.createElement('div')
        planetEnemies.className = 'planet-enemies'
        
        const planetFaction = document.createElement('h3')
        planetFaction.textContent = `Ruling Faction: ${faction}`
        planetFaction.className = 'planet-faction'

        const planetBoss = document.createElement('h3')
        planetBoss.textContent = `Planet Boss: ${boss}`
        planetBoss.className = 'planet-boss'

        const planetDescription = document.createElement('fieldset')
        planetDescription.className = 'planet-description'
        planetDescription.innerHTML = "<legend>Description:</legend>"

        const p = document.createElement('p')
        p.textContent = description

        planetDescription.append(p)

        planetEnemies.append(planetFaction)
        planetEnemies.append(planetBoss)

        div.append(planetName)
        div.append(planetEnemies)
        div.append(planetDescription)
        div.className = 'planet'

        planetsList.append(div)
    })
}

displayWarframes()
displayPlanets()