const express = require('express')


const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'pub')))


app.listen(8080)

console.log('8080 running on...')