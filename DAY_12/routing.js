const express =require('express')
const app =express()

app.listen(3000,()=>{
    console.log('Successfully connected on port 3000')
})

app.get('/',(req,res) => {
    res.send("<h1>Welcome to Home page!</h1>")
})

app.get('/about',(req,res) => {
    res.send("<h1>About page!</h1>")
})

app.get('/gallery',(req,res) => {
    res.send("<h1>Gallery page!</h1>")
})

app.get('/about/user',(req,res) => {
    res.send("<h1>About us</h1>")
})

app.get('/random.text',(req,res) => {
    res.send("<h1>random page</h1>")
})

app.get('/about/:id',(req,res) => {
    res.send(req.params)
})

// app.get('/user/:userid/book/:bookid',(req,res) => {
//     res.send(req.params)
// })

app.get('/user/:userid-:bookid',(req,res) => {
    res.send("Book ID:" + req.params.bookid)
})

app.get('/search',(req,res) => {
    const name=req.query.name
    const age= req.query.age
    res.send(`Search results for name:${name},age:${age}`)
})
