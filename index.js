const express = require('express')
const axios = require('axios').default
const app = express()
const port = process.env.PORT || 3000

app.get('/hello/:name', async (req, res) => {
  // TODO: this should point to service B
  const response = await axios.get('http://worldtimeapi.org/api/timezone/Europe/Berlin')

  res.send(`Hello ${req.params.name}. The date is ${response.data.datetime}`)
})

app.get('/senacor', async (req, res) => {
  res.send(`Hier ist der neue Endpunkt 2x`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
