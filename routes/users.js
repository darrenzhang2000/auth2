const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => res.render("login"))
router.post("/login", (req, res) => {

})

router.get("/register", (req, res) => res.render("register"))
router.post("/register", (req, res) => {
    const { name, email, password, password2 } = req.body
    errors = []
    if(errors.length < 3){
        errors.push({ error: "Name has to be at least 3 characters"})
    }

    if(password != password2){
        errors.push({ error: "Passwords must match"})
    }



    //if not successful, re-render the page
    if(!(name || email || password ||password2) && errors.length > 0){
        console.log(req.body)
        console.log(errors)
        res.render('register', req.body)
    }else{
        //add user to db
        res.send('success')
    }

})

module.exports = router