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
    const seat = {
        id: req.body.id,
        category: req.body.id,
        price: req.body.price,
        state: req.body.state
    }

    // read file
    readFromFile('data.json')
        .then(data => JSON.parse(data))
        .then(obj => {
            obj.replace(seat) // geben wir hier an dass der state von true zu false bzw. immer ins gegenteil geändert wird?
            // erst find (id) und dann können wir den state des entsprechenden seats ändern
            //object.state=false (anstatt replace)

            //write into file
            // .stringify() method converts the JavaScript value to a JSON string
            writeIntoFile('data.json', JSON.stringify(obj))
                .then(() => res.status(200).end())
                .catch(err => {
                    console.log(err)
                    res.status(500).end()
                })
        })
}