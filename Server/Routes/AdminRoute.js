import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import multer from "multer";
import path from "path";

const router = express.Router();

router.post("/adminlogin",(req, res) => {
    const sql = "SELECT * from admin Where email = ? and password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
      if (err) return res.json({ loginStatus: false, Error: "Query error" });
      if (result.length > 0) {
        const email = result[0].email;
        const token = jwt.sign(
          { role: "admin", email: email, id: result[0].id },
          "jwt_secret_key",
          { expiresIn: "1d" }
        );
        res.cookie('token', token)
        return res.json({ loginStatus: true });
      } else {
          return res.json({ loginStatus: false, Error:"Correo o contraseña incorrecta"});
      }
    });
  });

  router.post('/add_users', (req, res) => {
    const sql = 'INSERT INTO users (`name`, `email`, `password`, `address`) VALUES (?)';
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      const values = [
        req.body.name,
        req.body.email,
        hash,
        req.body.address
      ]
      con.query(sql, [values], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true})
      })
    })
  })



export { router as adminRouter };