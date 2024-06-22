import express from 'express'
import cors from 'cors'
import usersRouter from './routes/users-router'

// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'


// App Express
const app = express()

// Cors para porta padrão do reactjs
app.use(cors({
    origin: ['http://localhost:3000']
}))



// Rotas
app.use('/api', usersRouter)



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
