/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express'
import cors from 'cors'
import routes from '../routes'
import * as ErrorMiddlewares from '../middlewares/errors.middleware'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors())
// to prevent from undefined req body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use('/api', routes)

app.use(ErrorMiddlewares.methodNotAllowed)
app.use(ErrorMiddlewares.genericErrorHandler)

export default app
