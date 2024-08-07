
import dotenv from 'dotenv';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import createUsers from './lib/init.js';

import authRoute from './routes/auth.routes.js';
import checkinRoute from './routes/check.routes.js';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
createUsers();

// cors
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

// Routes
app.use('/api', authRoute);
app.use('/api', checkinRoute);


export default app;
