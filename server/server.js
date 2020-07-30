// const express = require('express');
// const db = require('./db');
// const bodyParser = require('body-parser')

// const app = express();
// const port = 3001;

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// Import express framework
const express = require('express')
// Import middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')

// Import routes
const homeRouter = require('./routes/home-route')
const usersRouter = require('./routes/users-route')
// Setup default port
const PORT = process.env.PORT || 3000
// Create express app
const app = express()
// Implement middleware
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    app.get('*', (req, res) => {
      res.sendFile('build/index.html', { root: __dirname })
  })
}
// Implement route for '/api' endpoint
app.use('/api', homeRouter)
// Implement route for '/users' endpoint
// ! Note:
// '/users' will prefix all post routes
// with '/users' => '/all' will become '/users/all'
app.use('api/city', usersRouter)
// Implement route for errors
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send('Something broke!')
})


// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})