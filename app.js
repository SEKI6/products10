const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

const port = process.env.PORT||3002
app.use(cors())

app.use(express.static('public'))

// parse application/json
app.use(bodyParser.json())

const players=[
    {name:'Miki', score:10},
    {name:'Aco', score:12},
    {name:'Pero', score:3}
]
app.get('/api', (req, res) => {
//res.send(items.sort((a,b)=>a.price-b.price))
//res.send(items.filter(a=>a.price>500))
//res.send(items.filter(a=>a.brand==='Samsung'))
//res.send(items.filter(a=>a.category!='mobile'))
res.send(players)
})

app.post('/api', (req, res)=>{
    //console.log()
    players.push(req.body)
    res.send(players.sort((a,b)=>b.score-a.score))
})

app.listen(port)
