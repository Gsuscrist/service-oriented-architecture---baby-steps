import express, {response} from 'express';
import Signale from "signale/signale.js";



const app = express();
const signale = new Signale()

app.use(express.json())

app.get('/hello-world',(req, res)=>{
    res.status(200).send({
        status:"success",
        message:"Hello mr Gsus"
    })
})


app.listen(8080,()=>{
    signale.success("server started in port 8080")
})
