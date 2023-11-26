import express from 'express'
import { appConfig } from './config/app'
import { indexRouter } from './routes'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
const { port } = appConfig
const environment = process.env.ENVIRONMENT

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if(environment == "development") app.use(morgan('common'))

app.use('/api', indexRouter)  

app.listen(port, () => {
  console.log(`Campus restaurant manager is listening at port ${port}`)
})