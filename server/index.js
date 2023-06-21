const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
require('dotenv').config()
const cors = require('cors')

const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const port = 3000

const app = express()

connectDB()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
