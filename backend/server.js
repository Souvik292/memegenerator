import express, { urlencoded } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const app=express();
const port=4000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookie())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.get('/api/memes', async (req, res) => {
  try {
    const response = await axios.get('https://meme-api.com/gimme/100');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch memes' });
  }
});



app.use('/upload', express.static(path.join(__dirname, 'upload')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'server/upload'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('photo'), (req, res) => {
  res.sendStatus(200);
});

app.get('/api/images', (req, res) => {
  const directoryPath = path.join(__dirname, 'server/upload');
  fs.readdir(directoryPath, (err, files) => {
    if (err) return res.status(500).send('Unable to scan files');
    res.json(files);
  });
});



mongoose.connect("mongodb+srv://Souvikbhowmick:UHqSbAIWYfV3piqv@cluster0.oem9qzq.mongodb.net/Memeblast?retryWrites=true&w=majority&appName=Cluster0");
const userschema =mongoose.Schema;
const dataschema=new userschema({
    email:String,
    password:String
});
const collection1 =mongoose.model("User",dataschema);


app.post("/signup", (req,res)=>{
    const {email,password}=req.body;
        console.log(password);

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
             const newdata=await collection1.create({
                email,
                password:hash
            });
        
    //    const token= jwt.sign({email},"secret");
    //    res.cookie("save password",token);
    //    res.redirect("/login");
       
  res.json({ message: 'User registered successfully' });

    // res.send(`hiii its work`);
    


        });
    });
});

 app.post("/signin", async (req,res)=>{


    try{
        const check=await collection1.findOne({email:req.body.email})
        bcrypt.compare(req.body.password,check.password,(err,result)=>{
            if(result){
                // let token=jwt.sign({email:check.email},"passwordsave");
                // res.cookie("save password",token);
                 res.json({ message: 'User login successfully' });

            }
            else{
    
                res.redirect("/main");
            }
        });
           
    }
    catch{
        res.send("wrong details");
    }

});



app.listen(port,()=>{
    console.log(`app is running on : http://localhost:${port}`);
})
