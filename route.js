const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {mongourl} = require('./config/keys') // mongo ka url yaha pe padha hai
// const Wish = require('./models/wish')
const Wish = mongoose.model("wishes")


// var data = ['code','sleep','eat']


mongoose.connect(mongourl); // mongoose se connect krne ke liye ese likhna padhega


module.exports = (app)=>{


//get routes
app.get('/home' ,(req,res)=>{          // localhost:5000/home pe browser pe kholea program
 
    // .find method se - jo database me hai voh sab kuch find karenge , wish naam ki collection se sab find kr
    Wish.find({}).then(data=>{
        console.log(data)                                                                                                                                                                                                                                                           

        res.render('home',{wish:data}) // data paas kr rhe hai wish me store krke
    })

    // wish se ham ejs file me use karenge
    

})
// callback function fire hoga , yeh req,res vahi hai -- request , response
app.get('/about', (req,res)=>{         // localhost:5000/about pe browser pe kholega program
    res.render('about')
})

//post routes
app.post('/sent',(req,res)=>{
    const Item = new Wish({
        wish:req.body.item
    }) 
    Item.save().then(data=>{
        console.log("saved")
        res.send(data)
    }).catch(err=>{
        throw err;
    })


    // console.log(req.body.item)    // req.body hame body-parser se mila
    // data.push(req.body.item)
    // res.send(data)
})


//delete routes
app.delete('/remove/:id',(req,res)=>{

    Wish.findOneAndRemove({wish:req.params.id}).then(data=>{
        console.log("deleted")
        res.send(data)
    })
   
})


}

