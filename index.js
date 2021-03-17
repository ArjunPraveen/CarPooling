const express = require('express')

const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('view engine', 'ejs')

app.get('', (req,res)=> {
    res.send("cab share")
})
 
app.listen(port, () => {console.log(`Listening on port ${port}`)})