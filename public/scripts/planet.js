const planetName = document.querySelector('#planet-name')
const planetFaction = document.querySelector('#planet-faction')
const planetBoss = document.querySelector('#planet-boss')
const planetDescription = document.querySelector('#planet-description')
const planetImage = document.querySelector('#planet-image')
const missionTable = document.querySelector('#mission-table')

console.log(location.pathname)

const displayPlanet = async () => {
    //const parts = location.pathname.split('/').slice(1)
    const planet = await fetch('/api/v1' + location.pathname)
    const {name, faction, boss, description, image} = await planet.json()

    planetName.textContent = name
    planetFaction.textContent = faction
    planetBoss.textContent = boss
    planetDescription.textContent = description
    
    planetImage.src = image
    planetImage.alt = `Image of the Planet ${name}`


    const missionsFetch = await fetch('/api/v1/missions/' + name.toLowerCase())
    const missions = await missionsFetch.json()
    console.log('/api/v1/missions/' + name.toLowerCase())
    console.log(missions)
    
    missions.forEach(mission => {
        displayMission(mission)
    });

}

const displayMission = async (mission) => {
    const {name, target, type} = mission
    const missionRow = document.createElement("tr")

    const nameRow = document.createElement("td")
    nameRow.textContent = name
    missionRow.append(nameRow)

    const targetRow = document.createElement("td")
    targetRow.textContent = target
    missionRow.append(targetRow)

    const typeRow = document.createElement("td")
    typeRow.textContent = type
    missionRow.append(typeRow)

    missionTable.append(missionRow)
}

displayPlanet()