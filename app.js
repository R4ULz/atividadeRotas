const express = require('express')
const app = express()

app.listen(8081, () => {
    console.log("server on")
})

app.get('/', (req, res)=>{
    res.send('pagina principal')
})

app.get('/cadastrar', (req, res)=>{
    res.send('pagina de cadastro')
})

app.get('/produtos/:item/:quantidade', (req, res)=>{
    res.send('item: ' + req.params.item + ' quantidade: ' + req.params.quantidade)
})

app.get('/contato', (req, res)=>{
    res.send('pagina de contato')
})
