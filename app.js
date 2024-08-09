
import { ENVIROMENT } from './config.js';
import dotenv from 'dotenv';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import createUsers from './lib/init.js';

import fs from 'fs';
import https from 'https';
import http from 'http';

import authRoute from './routes/auth.routes.js';
import checkinRoute from './routes/check.routes.js';

const app = express();

const httpsOptions = ENVIROMENT === 'dev' ? {
    key: fs.readFileSync('./certs/server.key'),
    cert: fs.readFileSync('./certs/server.crt')
} : {};

const server = ENVIROMENT === 'dev' ? https.createServer(httpsOptions, app) : http.createServer(app);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
createUsers();

// cors
app.use(cors({
    origin: ['http://localhost:3000', 'https://192.168.100.194:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

// Routes
app.use('/api', authRoute);
app.use('/api', checkinRoute);


export default server;
