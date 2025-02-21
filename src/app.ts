
import cors from 'cors';
import express, { Application, Request, Response } from 'express'
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// middleware
app.use(express.json())
// app.use(cors());

// app.use(cors({ origin: ['http://localhost:5001'] }));
app.use(cors({ origin: ['http://localhost:3000', 'https://design-role-six.vercel.app'], credentials: true }));

// application routes
app.use('/api', router);

// Conect Scerver medilwere
const getAllController = (req: Request, res: Response) => {
    res.send({
        status: true,
        message: 'Design-Role Server is Rouning Live ⚡',
    })
}

app.get('/', getAllController);

// Global Error Handelar
app.use(globalErrorHandler);

//Not Found Page function
app.use(notFound);

export default app