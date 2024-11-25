const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public'))

app.use('/api/v1', require('./routes/api/v1/warframe'))
app.use('/', require('./routes/pages/warframe'))

app.listen(port, () => console.log(`http://localhost:${port}`))