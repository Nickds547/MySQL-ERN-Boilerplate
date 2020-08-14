
import {connection} from './index';

export const allQuotes = async () => {
    return new Promise((resolve, reject) =>{
        connection.query("Select * FROM quotes", (err,results) =>{
            if(err)
                return reject(err)
            resolve(results)

            console.log("Getting Quotes")
          });
    });
}

export const addQuote = async (req: any) => {
    return new Promise((resolve, reject) =>{
        connection.query(`INSERT INTO quotes (active, words) VALUES ("true","${req.body.words}")`, (err,results) =>{
            if(err)
                return reject(err)
            resolve(results)

            console.log("Adding Quotes")
          });
    });
}

export const editQuote = async (req: any) => {
    return new Promise((resolve, reject) =>{
        connection.query(`UPDATE words SET words = "${req.body.words}" where id = "${req.body.id}"`,(err,results) =>{
            if(err)
                return reject(err)
            resolve(results)

            console.log("Adding Quotes")
          });
    });
}


export default {
    allQuotes,
    addQuote,
    editQuote
}