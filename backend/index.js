const express = require("express")
const cors = require("cors")


const app =express();


app.use(cors())
app.use(express.json())

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "mageshvachiravel@gmail.com",
    pass: "xgyo sncy fwwk vlab",
  },
});


app.post("/sendmail",function(req,res){

    const email = req.body.email;

    transporter.sendMail(
    {
        from:"mageshvachiravel@gmail.com",
        to:email,
        subject:"Greeting from Shop Sizzle! ",
        text:"Thank you for regsitering in our website happy shopping...!"
    },
    function(error,info){
        if(error){
        console.log(error);
        }
        else{
            console.log(info);
        }
    }
)
})


app.listen(5000, function(){
    console.log("server Starting...")
})