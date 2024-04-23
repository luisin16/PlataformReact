import express from "express"
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const router = express.Router()

router.post("/users_login",(req, res) => {
    const sql = "SELECT * from users Where email = ?";
    con.query(sql, [req.body.email], (err, result) => {
      if (err) return res.json({ loginStatus: false, Error: "Query error" });
      if (result.length > 0) {
        bcrypt.compare(req.body.password, result[0].password, (err, response) => {
            if (err) return res.json({ loginStatus: false, Error: "Wrong Password" });
            if(response) {
                const email = result[0].email;
                const token = jwt.sign(
                { role: "users", email: email },
                "users_secret_key",
                { expiresIn: "1d" }
                );
                res.cookie('token', token)
                return res.json({ loginStatus: true });
            }
        })
          
      } else {
          return res.json({ loginStatus: false, Error:"Correo o contraseña incorrecta"});
      }
    });
  });

export {router as UsersRouter}

