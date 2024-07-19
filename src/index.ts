import express from 'express'
import cors from 'cors'

import usersRouter from './routes/users-router'
import salesRepository from './repositories/sales-repositories'
import salesRouter from './routes/sales-router'


// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'


// App Express
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors para porta padrão do reactjs
app.use(cors({
    origin: ['http://localhost:3000']
}))



// Rotas
app.use('/api', usersRouter)

app.use('/api', salesRouter)


// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})




// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})
