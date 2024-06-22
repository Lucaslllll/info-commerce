import express from 'express'
import User from '../models/user'
const usersRouter = express.Router()


usersRouter.post('/users', (req, res) => {
    res.send('Criar novo user')
})
usersRouter.get('/users', (req, res) => {
    res.send('Listar users')
    
})

usersRouter.get('/users/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`User ${id}`)
})
usersRouter.put('/users/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualizar o user ${id}`)
})
usersRouter.delete('/users/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Deletar o user ${id}`)
})

export default usersRouter
