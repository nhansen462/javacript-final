const planetName = document.querySelector('#planet-name')
const planetFaction = document.querySelector('#planet-faction')
const planetBoss = document.querySelector('#planet-boss')
const planetDescription = document.querySelector('#planet-description')

const displayPlanet = async () => {
    //const parts = location.pathname.split('/').slice(1)
    const planet = await fetch('/api/v1' + location.pathname)
    const {name, faction, boss, description} = await planet.json()

    planetName.textContent = name
    planetFaction.textContent = faction
    planetBoss.textContent = boss
    planetDescription.textContent = description
}

displayPlanet()