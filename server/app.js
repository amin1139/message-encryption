import dotenv from 'dotenv';
dotenv.config({path: './.env'});
import express from 'express';
const app = express();
import { connectWithMongoose } from './db/connection1.db.js';
import cors from 'cors';

app.use(cors({origin: ['http://localhost:1234']}));

app.use(express.json());

app.use(express.urlencoded({extended:true}))

import router from './routes/post.route.js';
app.use('/encrypt', router) 

import decryptRoute from './routes/decrypt.js';
app.use("/decrypt", decryptRoute);  



connectWithMongoose().then(() => {
    app.listen(3000, () => {
        console.log('🚀 Server running on http://localhost:3000');
    });
});

export default app; 