import express from 'express';
import cookieParser from 'cookie-parser';
// import cors from 'cors';
import { AuthRouter } from './Api/Auth/Auth';

const app = express();
const secret = 'lalalalala';

app.get('/', (_, res) => {
  res.send('Hello, fuck!');
});

app.use(express.json());

app.use(cookieParser(secret));

// app.use(cors({
//     credentials: true, // используем кукис
//     origin: 'http://localhost:3000', // адрес фр
// }));

app.use(AuthRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
