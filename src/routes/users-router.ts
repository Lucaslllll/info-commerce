import express from 'express'
import User from '../models/user'
import usersRepository from '../repositories/users-repositories'

const usersRouter = express.Router()


usersRouter.post('/users', (req, res) => {
    const user: User = req.body

    usersRepository.create(user, (id) => {
        if (id) {
            res.status(201).location(`/users/${id}`).send()
        } else {
            res.status(400).send()
        }

    })

})

usersRouter.get('/users', (req, res) => {
    // res.send('Listar users')
    usersRepository.getAll((user) => res.json(user))

})

usersRouter.get('/users/:id', (req, res) => {
    const id: number = +req.params.id
    // res.send(`User ${id}`)
    usersRepository.get(id, (user) => res.json(user))
    
})

usersRouter.put('/users/:id', (req, res) => {
    const id: number = +req.params.id
    // res.send(`Atualizar o user ${id}`)
    const user: User = {
        id: req.body.id,
        email: req.body.email,
        password: req.body.password
    };
    
    usersRepository.update(id, user, (user) => res.json(user))
})

usersRouter.delete('/users/:id', (req, res) => {
    const id: number = +req.params.id
    
    usersRepository.delete(id, (user) => res.json(user))
})

export default usersRouter

