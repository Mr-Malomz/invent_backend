import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import morgan from 'morgan';

dotenv.config();

//database and app configuration;
connectDB();
const app = express();
app.use(morgan('combined'));

const PORT = process.env.PORT || 6000;

//middlewares
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
});
