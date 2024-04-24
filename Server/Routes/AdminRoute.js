import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";

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

  router.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
      })
  })

  router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM users WHERE id = ?";
    con.query(sql, [id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
      })
  })

  router.put('/edit_users/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE users set name= ?, email= ?, address= ? where id= ?`
    const values = [
      req.body.name,
      req.body.email,
      req.body.address
    ]
    con.query(sql,[...values, id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
    })
  })

  router.delete('/delete_users/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from users where id = ?"
    con.query(sql,[id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})
  
router.get('/cerrar', (req, res) => {
  res.clearCookie('token')
  return res.json({Status: true})
})

export { router as adminRouter };