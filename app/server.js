const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({
    ok: 'car'
  })
})

app.listen(PORT, () => {
  console.log(`listening to port *:${PORT}. press ctrl + c to cancel`)
})
