const express = require('express')
const connectDB = require("./config/db");

const app = express()
const port = 5000
app.use(express.json())
app.use("/", require("./routes/index"));
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/views', express.static(__dirname + 'public/img'))

//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get('', (req,res)=> {
    res.send("cab share")
})

connectDB()
app.listen(port, () => {console.log(`Listening on port ${port}`)})