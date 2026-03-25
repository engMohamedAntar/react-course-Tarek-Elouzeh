const express= require('express');
const {amthalRandom, amthalTen} = require('./handler');
const cors= require('cors');

const app = express();
app.use(cors({
    origin: '*'
}));

app.get('/amthal/random',(req,res,next)=>{
    const amthal= amthalRandom();
    res.status(200).json(amthal);
})

app.get('/amthal/ten',(req,res,next)=>{
    const amthal= amthalTen();
    res.status(200).json(amthal);
})

app.use((err, req, res, next) => {
    const statusCode= err.statusCode || 500;
    res.status(statusCode).json({error: err.message});
})

app.listen(4000, () => console.log('listening on port 4000'));