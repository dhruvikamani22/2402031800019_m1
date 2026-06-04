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

app.get('/show-contact/:id', async (req, res) => { 
    // const contact =await Contact.findOne({ _id: req.params.id })
    const contact =await Contact.findById( req.params.id )
    // res.json(contact)
    res.render('show-contact', { contact }) 

})

app.get('/add-contact', (req, res) => { res.render('add-contact') })

app.post('/add-contact', async (req, res) => { 
    // const contact = await Contact.insertOne({
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     address: req.body.address 
    // })
    // 
    await Contact.create(req.body)
    // res.send(req.body)
    res.redirect("/")
})

app.get('/update-contact/:id', async (req, res) => { 
    const contact =await Contact.findById( req.params.id )
    res.render('update-contact', { contact })

})

app.post('/update-contact/:id', async (req, res) => {
    const {first_name, last_name, email, phone, address} = req.body
    await Contact.findByIdAndUpdate( req.params.id ,{first_name, last_name, email, phone, address})
    // res.send(req.body)
    res.redirect("/")
})

app.get('/delete-contact/:id', async(req, res) => {
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect("/")
})

// app.get('/update-contact', (req, res) => {})
app.listen(3000, () => {
    console.log("server startred sucessfully on port 3000.")
})
