const express=require("express")
const app=express()
const pug=require('pug')
app.set('view engine','pug')
app.set('views','./views')
app.use(timer)

app.get('/',(req,res)=>{
    res.status(200).render("home")
})
app.get('/our-services',(req,res)=>{
    res.status(200).render("services")
})
app.get('/contact',(req,res)=>{
    res.status(200).render("contact")
})



function timer(req,res,next){
    const timeNow=new Date()
    const Time=timeNow.getHours()
    const day=timeNow.getDay()
    if(Time<17 && Time>9 && day<=5){
        
    }else{
        res.status(200).render("error")
    }
    next()
}
app.listen(3000)