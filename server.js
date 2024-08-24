// const express = require('express')
// const colors = require('colors')
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//configure env
dotenv.config();

//database config
connectDB()

//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))


//routes
app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use('/api/v1/product', productRoutes)

//rest api
// app.get('/', (req, res) => {
//     res.send("<h1>Welocome to ecommerce app</h1>");
// });
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

//port
const port = process.env.PORT || 8080;

// run listen 
app.listen(port, () => {
    console.log(`Server is running on ${process.env.Dev_MODE} mode on port ${port}`.bgCyan.white)
})