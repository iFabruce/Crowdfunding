import express from 'express';
import cors from 'cors';


const app = express();
import {pool} from './db.js';


app.use(cors());
app.use(express.json())


app.get('/', async(req,res) => {
    try {
        const req = await pool.query('select * from utilisateur');
        res.json(req.rows);
    } catch (error) {
        console.log(error.message)
    }
})
app.post('/insert', async(req,res) => {
    try {
        const {nom,login,mdp} = req.body
        const exec = await pool.query('insert into utilisateur values(default,$1,$2,$3) returning *',[nom,login,mdp]);
        res.json(req.rows);

    } catch (error) {
        console.log(error.message)
    }
})
app.delete('/delete/:id', async(req,res) => {
    try {
        const {id} = req.params
        const exec = await pool.query('delete from utilisateur where id = $1',[id]);
        console.log("deleted")

    } catch (error) {
        console.log(error.message)
    }
})
app.listen(5000, () => {
    console.log("connected")
})
