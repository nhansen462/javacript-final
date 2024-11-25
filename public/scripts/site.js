const warframesList = document.querySelector('#warframes')
const planetsList = document.querySelector('#planets')

const displayWarframes = async () => {
    const warframes = await fetch('/api/v1/warframes')
    warframes.forEach(({name, gender, description, image}) => {
        const li = document.createElement('li')
        const div = document.createElement('div')

        const warframeName = document.createElement('h2')
        warframeName.textContent = name
        
        const warframeGender = document.createElement('h3')
        warframeGender.textContent = gender

        const warframeImage = document.createElement('img')
        warframeImage.src = image
        warframeImage.alt = `Image of the Warframe ${name}`

        const warframeDescription = document.createElement('p')
        warframeDescription.textContent = description

        div.append(warframeName)
        div.append(warframeGender)
        div.append(warframeImage)
        div.append(warframeDescription)

        li.append(div)
        warframesList.append(li)
    })
}

const displayPlanets = async () => {
    const planets = await fetch('/api/v1/planets')
    planets.forEach(({name, faction, description, boss}) => {
        const li = document.createElement('li')
        const div = document.createElement('div')

        const planetName = document.createElement('a')
        planetName.textContent = name
        planetName.class = "planet"
        planetName.href = `/planets/${name}`
        
        
        const planetFaction = document.createElement('h3')
        planetFaction.textContent = faction

        const planetBoss = document.createElement('h3')
        planetBoss.textContent = boss

        const planetDescription = document.createElement('p')
        planetDescription.textContent = description

        div.append(planetName)
        div.append(planetFaction)
        div.append(planetBoss)
        div.append(planetDescription)

        li.append(div)
        planetsList.append(li)
    })
}

displayWarframes()
displayPlanets()