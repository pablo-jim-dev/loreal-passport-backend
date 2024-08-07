import server from './app.js';
import * as dotenv from 'dotenv'
import { connectDB } from './db.js';
dotenv.config();
connectDB();

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});