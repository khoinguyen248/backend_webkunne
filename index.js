import express from 'express'

import Root from './src/routers/index.js'
import connectDatabase from './src/database/index.js'


const app = express()
connectDatabase()
app.use(express.json())
app.use(Root)


app.listen(3000, () => {
    console.log("Server is on")
})
