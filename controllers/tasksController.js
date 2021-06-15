const { Task, Category, User } = require('../models')
const { verifyToken } = require('../helpers/jwt')


class TasksController {
    static getTasks(req, res, next) {
        Task.findAll({
            include: [ Category, User ]
        })
        .then((result) => {
            res.status(200).json(result)
            
        })
        .catch((error) => {
            next(error)
        })
    }

    static postTask(req, res, next) {
        const { title, description, due_date } = req.body
        const { access_token } = req.headers
        const decoded = verifyToken(access_token)

        Task.create({
            title,
            description,
            due_date,
            UserId: decoded.id
        })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => {
            next(error)
        })
    }

    static getTaskById(req, res, next) {
        const id = +req.params.id

        Task.findByPk(id)
        .then((result) => {
            if (result) {
                res.status(200).json(result)
            } else {
                next({ name: 'error not found' }) 
            }
        })
        .catch((error) => {
            next(error)
        })
    }

    static updateTaskById(req, res, next) {
        const id = +req.params.id
        const { title, description, CategoryId, due_date } = req.body

        Task.update({
            title,
            description,
            CategoryId,
            due_date
        },{
            where: { id },
            returning: true
        })
        .then((result) => {
            if (result[0] === 0) {
                next({ name: 'error not found' })
            } else {
                res.status(200).json(result[1])
            }            
        })
        .catch((error) => {
            next(error)
        })
    }

    static patchTaskById(req, res, next) {
        const id = +req.params.id
        const { CategoryId } = req.body

        Task.update({
            CategoryId
        },{
            where: { id },
            returning: true
        })
        .then((result) => {
            if (result[0] === 0) {
                next({ name: 'error not found' })
            } else {
                res.status(200).json(result[1])
            }            
        })
        .catch((error) => {
            next(error)
        })
    }

    static deleteTaskById(req, res, next) {
        const id = +req.params.id

        Task.destroy({
            where: { id },
            returning: true
        })
        .then((result) => {
            if (result === 0) {
                next({ name: 'error not found' })
            } else {
                res.status(200).json({ message: "task success to delete" })
            }            
        })
        .catch((error) => {
            next(error)
        })
    }
}

module.exports = TasksController