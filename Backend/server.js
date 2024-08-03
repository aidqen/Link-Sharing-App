import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { linksService } from './services/links.service'

const app = express()

app.use(cookieParser())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'))
} else {
  const corsOptions = {
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:3030',
      'http://localhost:3030',
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5174',
    ],
    credentials: true,
  }
  app.use(cors(corsOptions))
}

app.get('/api/links', async (req, res) => {
    const links = linksService.query()
    console.log('links:', links)
    res.send(links)
})

app.post('/api/links', async (req, res) => {
    const link = req.body
    console.log('link:', link)
    res.send(link)
})


const port = process.env.PORT || 3030
app.listen(port, () => {
  loggerService.info(`Server listening on port http://127.0.0.1:${port}/`)
})
