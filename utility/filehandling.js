import fs from 'fs'

// function to read the file
export const readFromFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err)
                reject(err)
            else
                resolve(data)
        })
    })
}

// function to write into the file
export const writeIntoFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(true)
        })
    })
}