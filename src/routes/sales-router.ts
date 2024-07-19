import express from 'express'
import Sale from '../models/sale'
import salesRepository from '../repositories/sales-repositories'
const salesRouter = express.Router()


salesRouter.post('/sales', (req, res) => {
    const sale: Sale = req.body

    salesRepository.create(sale, (id) => {
        if(id){
            res.status(201).location(`/users/${id}`).send()
        }else{
            res.status(400).send()
        }

    })

})
salesRouter.get('/sales', (req, res) => {
    salesRepository.getAll((sale) => res.json(sale))

})

salesRouter.get('/sales/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Vendas ${id}`)
})
salesRouter.put('/sales/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualizar o vendas ${id}`)
})
salesRouter.delete('/sales/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Deletar o vendas ${id}`)
})

export default salesRouter
