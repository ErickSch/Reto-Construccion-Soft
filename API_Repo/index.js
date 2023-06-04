// https://www.youtube.com/watch?v=-RCnNyD0L-s

// npm init -y
// "start": "node index.js"
// npx nodemon index.js
// npm install express
// npm install nodemon  
// npm install morgan 
// npm install cors 
// "type": "module"

// npm i bcrypt 
// npm i passport passport-local express-session express-flash
// npm i express-session


// bd password: 123456//
// URI: mongodb+srv://a01740804:123456//@cluster0.ihh10uj.mongodb.net/?retryWrites=true&w=majority
// postwoman: https://hoppscotch.io/s

// https://www.passportjs.org/tutorials/password/

import express from "express";
import morgan from "morgan";
import cors from "cors";
import {connectDB} from "./db.js";
import itemsRoutes from "./items.routes.js";





const app = express();



connectDB();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());
app.use(itemsRoutes);

app.listen(5000, console.log("http://localhost:5000"));
