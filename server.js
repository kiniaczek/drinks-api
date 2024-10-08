const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let drinks = {
    'margarita': {
        'taste': 'strawberry',
        'price': 30,
        'currency': 'pln',
        'voltarz': 0.08
    },
    'pornstar martini':{
        'taste': 'marakuja',
        'price': 30,
        'currency': 'pln',
        'voltarz': 0.14
    },
    'unknown':{
        'taste': 'unknown',
        'price': 'unknown',
        'currency': 'unknown',
        'voltarz': 'unknown'
}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/drinks/:drinkTaste', (request, response) => {
    const drinkTasting = request.params.drinkTaste.toLowerCase()
    console.log(drinkTasting)
    if(drinks[drinkTasting]){
        response.json(drinks[drinkTasting])
    }else{
        response.json(drinks['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

