import { readFromFile, writeIntoFile } from "../utility/filehandling.js";

export const getAllSeats = (req, res) => {
    //read file
    readFromFile('data.json')
        // when everything ok put into json by parsing the data
        .then(data => res.status(200).json(JSON.parse(data)))
        // when error server response with status 500 (+ error in console) and end the action
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
}

// function to change state of a seat
export const changeSeatState = (req, res) => {
    console.log(req.body.id)
    const seat = req.body.id

    // read file
    readFromFile('data.json')
        .then(data => JSON.parse(data))
        .then(data => {
            // Abgleich id === id
            const obj = data.find((item) => {
                return item.id === seat
            })
            console.log(obj)

            // dann state ändern
            obj.state = !obj.state
            console.log(obj.state)

            //write into file
            // .stringify() method converts the JavaScript value to a JSON string
            writeIntoFile('data.json', JSON.stringify(data))
                .then(() => res.status(200).end())
                .catch(err => {
                    console.log(err)
                    res.status(500).end()
                })
        })
}