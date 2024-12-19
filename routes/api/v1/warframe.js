const router = require('express').Router()

const {getCollection, ObjectId} = require('../../../db-connection')

const getWarframeCollection = getCollection('Warframe')
const getWarframes = getWarframeCollection('Warframes')
const getPlanets = getWarframeCollection('Planets')
const getMissions = getWarframeCollection('Missions')

const Capitalize = word => { return word.substring(0, 1).toUpperCase() + word.substring(1) }

router.get('/warframes', async (__, response) => {
    const collection = await getWarframes()
    const warframes = await collection.find({}).toArray();
    response.send(warframes)
})

router.get('/planets', async (__, response) => {
    const collection = await getPlanets()
    const planets = await collection.find({}).toArray();
    response.send(planets)
})

router.get('/warframes/:name', async (request, response) => {
    const {name} = request.params
    const collection = await getWarframes()
    const warframe = await collection.findOne({name: Capitalize(name)});
    response.send(warframe)
})

router.get('/planets/:name', async (request, response) => {
    const {name} = request.params
    const collection = await getPlanets()
    const planet = await collection.findOne({name: Capitalize(name)});
    response.send(planet)
})

router.get('/missions/:planet', async (request, response) => {
    const {planet} = request.params
    const collection = await getMissions()
    const missions = await collection.find({planet: Capitalize(planet)}).toArray();
    console.log(missions)
    response.send(missions)
})

router.post('/warframes', async (request, response) => {
    const {name, gender, description, image} = request.body
    const collection = await getWarframes()
    const {acknowledged, insertedID} = await collection.insertOne({name, gender, description, image})
    response.send({acknowledged, insertedID})
})

router.post('/planets', async (request, response) => {
    const {name, faction, description, boss, image} = request.body
    const collection = await getPlanets()
    const {acknowledged, insertedID} = await collection.insertOne({name, faction, description, boss, image})
    response.send({acknowledged, insertedID})
})

router.post('/missions', async (request, response) => {
    const {name, target, type, planet} = request.body
    const collection = await getMissions()
    const {acknowledged, insertedID} = await collection.insertOne({name, target, type, planet})
    response.send({acknowledged, insertedID})
})

module.exports = router