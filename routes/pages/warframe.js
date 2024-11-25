const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', 'public')

router.get('/', (__, response) => {
    response.sendFile('index.html', {root})
})

router.get('/planets/:name', (__, response) => {
    response.sendFile('planets.html', {root})
})

router.get('/admin', (__, response) => {
    response.sendFile('index.html', {root})
})

module.exports = router