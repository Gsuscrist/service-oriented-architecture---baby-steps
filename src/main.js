import express, {response} from 'express';
import Signale from "signale/signale.js";



const app = express();
const signale = new Signale()

app.use(express.json())

app.get('/hello-world',(req, res)=>{
    res.status(200).send({
        status:"Success",
        data:[],
        message:"Hello mr Gsus",

    })
})


app.listen(8081,()=>{
    signale.success("server started in port 8081")
})
