const express = require('express')

const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')

const port = 3000

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true


}))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
