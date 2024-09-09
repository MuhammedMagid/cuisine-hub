const express = require('express')
const mongoose = require('mongoose')
const dishRoute = require ("./routes/dishes.route.js")

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req,res)=>{
  res.send("Hi")
})
app.use('/api/dishes', dishRoute)


mongoose.connect('mongodb+srv://muhammed<db_password>@cluster0.qr7cw.mongodb.net/Dishes?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Hello from the db");
    app.listen(port, () => {
      console.log(`listening to port ${port}`)
    })
  })
  .catch(() => console.log("404 Error"));
