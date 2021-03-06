import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(routes);

export default app;
