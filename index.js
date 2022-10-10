import express from 'express'
import cors from 'cors'
import './config.js'
import { changeSeatState, getAllSeats } from './controller/seatcontroller.js'

const app = express()
const PORT = process.env.PORT || 8888

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ getAllSeats })
})

app.get('/seats', getAllSeats) // request to get data/state of seat (for overview customer site)
app.post('/seats', changeSeatState) // request to change state of a seat


/* const queryFilter = (queryParam, seats, filterFunction) => {
    if (queryParam) {
        return seats.filter(filterFunction)
    } else {
        return seats
    }
}


app.get('/result', (req, res) => {
    const id = req.query.id;
    const category = req.query.category;
    const price = req.query.price;
    const state = req.query.state;
    let resultSeats = queryFilter(id, seatList, (item) => item.id === id);
    resultSeats = queryFilter(category, resultSeats, (item) => item.category.toLowerCase() === category)
    resultSeats = queryFilter(price, resultSeats, (item) => item.price.toString() === price)
    resultSeats = queryFilter(state, resultSeats, (item) => item.state.toString() === state)
    res.status(202).json(resultSeats)
}) */

app.listen(PORT, () => console.log('Server listening on port', PORT))