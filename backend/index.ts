import express, { Request, Response }  from "express";
import prisma from "./db";
import cors from "cors"
import zod from "zod"
const app = express();
app.use(express.json())
var corsOptions = {
    origin: ["https://instinctive-studio-quyl-assign.vercel.app"],
    optionsSuccessStatus: 200 // For legacy browser support
    }
    
    app.use(cors(corsOptions));

const bodySchema = zod.object({
    currClass : zod.string(),
    AY : zod.string()
})
app.post('/' , async (req : Request,  res : Response )=>{
    const body =await req.body
    const bodySchemaParse = bodySchema.safeParse(body)
    if(!bodySchemaParse.success){
       return res.status(401).json({
            "Message" : "Not Authorized"
        })
    }
    const currClass= body.currClass;
    const currAY = body.AY;
    try{
        const response= await prisma.students.findMany({
            where : {
                Cohort : currAY,
                currClass : currClass
            }, 
            include : {
                Courses : true
            }
        })
        return res.status(200).json(response)
    }
        catch(e){
            return res.status(401).json({
                "message" : "failed"
            })     
        }
})


app.listen(3000)