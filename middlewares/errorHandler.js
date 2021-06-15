function errorHandler(err, req, res, next) {
    if(err.name === 'invalid token') {
        res.status(401).json({ message: 'invalid token' })
    } else if(err.name === 'please login first') {
        res.status(401).json({ message: 'please login first' })
    } else if(err.name === 'error not found') {
        res.status(404).json({ message: 'error not found' })
    } else if(err.name === 'unauthorized') {
        res.status(401).json({ message: 'unauthorized' })
    } else if(err.name === 'invalid password or email') {
        res.status(400).json({ message: 'invalid password or email' })
    } else if(err.name === 'SequelizeValidationError') {
        let listError = []

        err.errors.forEach(element => {
            listError.push(element.message)
        })
        res.status(400).json({ message: listError })

    } else {
        res.status(500).json({ message: err.message || 'internal server error' })
    }
}

module.exports = errorHandler