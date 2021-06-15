const { Task, Category, User } = require('../models')

class CategoryController {
    static getCategory(req, res, next) {
        Category.findAll({
            include: [Task]
        })
        .then((result) => {
            res.status(200).json(result)
            
        })
        .catch((error) => {
            next(error)
        })
    }
}

module.exports = CategoryController