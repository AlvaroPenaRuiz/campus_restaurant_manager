import express from 'express'
import { appConfig } from './config/app'
import { indexRouter } from './routes'

const app = express()
const { port } = appConfig

app.use(express.json())
app.use('/api', indexRouter)  

app.listen(port, () => {
  console.log(`Campus restaurant manager is listening at port ${port}`)
})