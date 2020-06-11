const express=require("express")
const app=express()
app.set('view engine','ejs')
app.use(express.urlencoded())

app.get('/',(req,res) =>{
    // res.send("hello world")
    res.render('pages/index')
})

app.post('/logindone',(req,res) =>{
    
    const username=req.body.username
    const password=req.body.pwd
    // console.log(username,password)

    if(username=='Ruchika' && password=='Roshil')
    {
        res.render('pages/home')
    }
    else{
        res.render('pages/index')
    }
})







app.listen(5000,() =>console.log("Server is running at 5000"))