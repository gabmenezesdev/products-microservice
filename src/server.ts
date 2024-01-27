import express from "express";
import {router} from './routes'
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
    return res.send('Service online!');
});
  
app.use('/api/', router);

// error handling
// app.use( function error(err:any, req: Request, res: Response, next: NextFunction) {
//     console.error(err.stack);
//     const errorMessage = err.status ? err.message : 'Erro interno no servidor';
//     const statusCode = err.status || 500;
//     return res.status(statusCode).json({ message: errorMessage });
//   });

app.listen(process.env.PORT, ()=>{
    console.log('servidor online')
})

export {app}