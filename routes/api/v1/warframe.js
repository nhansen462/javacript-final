const router = require('express').Router()

const {getCollection, ObjectId} = require('../../../db-connection')

const getWarframeCollection = getCollection('Warframe')
const getWarframes = getWarframeCollection('Warframes')
const getPlanets = getWarframeCollection('Planets')

const Capitalize = word => {return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()}

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
    const name = request.params
    const collection = await getWarframes()
    const warframe = await collection.findOne({name: Capitalize(name)});
    response.send(warframe)
})

router.get('/planets/:name', async (request, response) => {
    const name = request.params
    const collection = await getPlanets()
    const planet = await collection.findOne({name: Capitalize(name)});
    response.send(planet)
})

router.post('/warframes', async (request, response) => {
    const {name, gender, description, image} = request.body
    const collection = getWarframes()
    const {acknowledged, insertedID} = await collection.insertOne({name, gender, description, image})
    response.send({acknowledged, insertedID})
})

router.post('/planets', async (request, response) => {
    const {name, faction, description, boss} = request.body
    const collection = getPlanets()
    const {acknowledged, insertedID} = await collection.insertOne({name, faction, description, boss})
    response.send({acknowledged, insertedID})
})

module.exports = router