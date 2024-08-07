import app from './app.js';
import * as dotenv from 'dotenv'
import { connectDB } from './db.js';
import fs from 'fs';
import https from 'https';

const httpsOptions = {
    key: fs.readFileSync('./certs/server.key'),
    cert: fs.readFileSync('./certs/server.crt')
}

dotenv.config();
connectDB();

// app.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

https.createServer(httpsOptions, app).listen(3000, () => {
    console.log('Server is listening on port 3000');
});