const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.status(200).json({
    ok: true
  })
})

app.listen(PORT, () => {
  console.log(`listening to port *:${PORT}. press ctrl + c to cancel`)
})
