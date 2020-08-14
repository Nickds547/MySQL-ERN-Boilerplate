import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
//import apiRouter from './routes';
import quoteRouter from './routes/quotes'

const app = express();

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('public'));
//app.use(apiRouter);
app.use(quoteRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
