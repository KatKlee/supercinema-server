import express from 'express'
import cors from 'cors'
import './config.js'
import { changeSeatState, getAllSeats } from './controller/seatcontroller.js'
import { sendMail } from './controller/emailController.js'

const app = express()
const PORT = process.env.PORT || 8888

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ getAllSeats })
})

app.get('/seats', getAllSeats) // request to get data/state of seat (for overview customer site)
app.put('/seats', changeSeatState) // request to change state of a seat
app.post('/api/mail', sendMail)

app.listen(PORT, () => console.log('Server listening on port', PORT))