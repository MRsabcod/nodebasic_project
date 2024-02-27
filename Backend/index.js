import express from 'express'
import routes from './routes/index.mjs'
import db from './config/db.mjs'
const app =express()
db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))
app.use(express.json()) 

app.use(express.urlencoded({ extended: true }))
app.listen(3001,()=>{
    console.log('server is running on port 3001')
   
})
app.get('/', (req, res) => {
    res.send('Hello World!')
    
  })
  app.use('/',routes)
  




//static files
// js
// app.use(express.static('public'));
// //body parser
console.log("first")