import express from "express";
import sql from "msql2/promise";
import brypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express()

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "hazi"

})
app.post("/hazi", async (req,res)=>{
    const body = req.body;
    try {
        const hashPass = await bcrypt.hash(body.password, 12)
        const [result] = await pool.query(
            "insert into users(username, email, phonenumber, address) VAlues  (?,?,?,?);"
            [body.username, body.email, body.phonenumber, body.adress, hashPass]
        )
        res.status(201).json({"message": "Sikerült!!!"})
    } catch (err) {
        console.log(err)
    }
})


const Port = 3000;
app.listen(Port, ()=>{
    console.log(`a szerver fut${Port}`)
})