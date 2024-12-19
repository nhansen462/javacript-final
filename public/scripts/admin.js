const warframeButton = document.querySelector('#add-warframe')
const planetButton = document.querySelector('#add-planet')
const missionButton = document.querySelector('#add-mission')

const addWarframe = async () => {
    const name = document.querySelector('#warframe-name')
    const gender = document.querySelector('#warframe-gender')
    const description = document.querySelector('#warframe-description')
    const image = document.querySelector('#warframe-image')

    const warframe = {
        name: name.value,
        gender: gender.value,
        description: description.value,
        image: image.value
    }

    await fetch('/api/v1/warframes', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(warframe)
    })

    name.value = "";
    gender.value = "";
    description.value = "";
    image.value = "";

    alert("Warframe added.")
}

const addPlanet = async () => {
    const name = document.querySelector('#planet-name')
    const faction = document.querySelector('#planet-faction')
    const description = document.querySelector('#planet-description')
    const boss = document.querySelector('#planet-boss')
    const image = document.querySelector('#planet-image')

    const planet = {
        name: name.value,
        faction: faction.value,
        description: description.value,
        boss: boss.value,
        image: image.value
    }

    await fetch('/api/v1/planets', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(planet)
    })

    name.value = "";
    faction.value = "";
    description.value = "";
    boss.value = "";
    image.value = "";

    alert("Planet added.")
}

const addMission = async () => {
    const name = document.querySelector('#mission-name')
    const target = document.querySelector('#mission-target')
    const type = document.querySelector('#mission-type')
    const planet = document.querySelector('#mission-planet')

    const mission = {
        name: name.value,
        target: target.value,
        type: type.value,
        planet: planet.value
    }

    await fetch('/api/v1/missions', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(mission)
    })

    name.value = "";
    target.value = "";
    type.value = "";
    planet.value = "";
    
    alert("Mission added.")
}

missionButton.addEventListener('click', async () => {addMission()});
warframeButton.addEventListener('click', async () => {addWarframe()});
planetButton.addEventListener('click', async() => {addPlanet()});