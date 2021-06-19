import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import morgan from 'morgan';
import HealthCheck from './api/routes/healthCheck';

dotenv.config();

//database and app configuration;
const app = express();
app.use(morgan('combined'));

const PORT = process.env.PORT || 6000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(HealthCheck);

app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
	connectDB();
});
