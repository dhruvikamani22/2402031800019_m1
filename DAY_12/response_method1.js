const express =require('express')
const app =express()

app.listen(3000,()=>{
    console.log('Successfully connected on port 3000')
})

// app.get('/',(req,res) => {
//     res.send(
//         ['Apple','Banana','Mango']
//     )
// })

// app.get('/',(req,res) => {
//     const users=[
//         {id:1, name:'Nivedi'},
//         {id:2, name:'tanvi'}
//     ]
    
//     res.json(users)
// })

app.set('view engine', 'ejs')

app.get('/',(req,res) => {
    res.jsonp({ name: 'Dhruvi', age: 20})
})

app.get('/about',(req,res) => {
//    res.redirect(301,'https://www.google.com/');
    res.redirect('..');
})

// app.get('/user',(req,res) => {
//    res.send("<h1>User page</h1>")
// })

// app.get('/user',(req,res) => {
//    res.render('user')
// })



