const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "adhd"
})


app.post('/login', (req , res)=>{
    const sql = "select * from login where username = ? and password = ?"
    
    db.query(sql, [req.body.email,req.body.password],(err,data) =>{
        if(err) return res.json("Login Failed");
        if(data.length >0){
            return res.json("Login Successful!")
        } else {
            return res.json("No Record found!")
        }
    })
})
app.listen(8081, ()=> {
    console.log("Listening...");
})


