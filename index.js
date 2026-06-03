const express =require("express")
const app= express()
const mongoose =require("mongoose")
const Contact =require("./models/contacts.models")

//Database connection
mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud')
.then(() => console.log("Database connected."))
//middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

//routes
app.get('/',async (req, res) => { 
    const contacts = await Contact.find()
    // res.json(contacts)
    res.render('home', { contacts })
 })

app.get('/show-contact', (req, res) => { res.render('show-contact') })

app.get('/add-contact', (req, res) => { res.render('add-contact') })

app.post('/add-contact', (req, res) => {})

app.get('/update-contact', (req, res) => { res.render('update-contact') })

app.post('/update-contact', (req, res) => {})

app.get('/delete-contact', (req, res) => {})

// app.get('/update-contact', (req, res) => {})
app.listen(3000, () => {
    console.log("server startred sucessfully on port 3000.")
})