import * as express from 'express';
import DB from '../db';
import * as bodyparse from 'body-parser';

const quoteRouter = express.Router();


quoteRouter.get('/api/quotes', async (req,res) => {
    try
    {
        let quotes = await DB.Quotes.allQuotes();
        res.json(quotes)
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

quoteRouter.post('/api/addquote', async (req,res) => {
    try
    {
        let quotes = await DB.Quotes.addQuote(req);
        res.json(quotes)
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
        console.log("THERE WAS AN ERROR")
    }
})

quoteRouter.post('/api/editquote', async (req,res) => {
    try
    {
        let quotes = await DB.Quotes.editQuote(req);
        res.json("Edited Successfuly")
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
        console.log("THERE WAS AN ERROR")
    }
})



export default quoteRouter;