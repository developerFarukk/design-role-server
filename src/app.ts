
import cors from 'cors';
import express, { Application, Request, Response } from 'express'
import router from './app/routes';

const app: Application = express();

// middleware
app.use(express.json())
app.use(cors());

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.send({
        status: true,
        message: 'Blog project Server is Rouning Live ⚡',
    })
})

export default app