const express= require("express")
const app=express()
const bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/bmi.html')
})
app.post('/',(req,res)=>{
    w1=Number(req.body.weight);
        
    h1=Number(req.body.height);
    let bmi=w1/(h1*h1)
    res.send("your bmi of body:"+bmi)

})

app.listen(8000,()=>{
    console.log("server run on port 3000")
})