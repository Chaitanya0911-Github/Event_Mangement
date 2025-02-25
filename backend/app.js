import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from 'dotenv';
import messageRouter from './router/messageRouter.js'
import cors from 'cors';

const app = express();
dotenv.config({ path: './config/.env' });
    
app.use(cors({
    origin: [process.env.FRONT_END],
    methods: ['POST'],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/v1/message", messageRouter)

dbConnection();

export default app;

