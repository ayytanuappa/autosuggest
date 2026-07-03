const express=require('express')
const app=express()
const port=process.env.port || 3002;
app.use(express.static("frontend"))
app.listen(port, function(){
  console.log("Succesfully running at http://localhost:" + port)
})