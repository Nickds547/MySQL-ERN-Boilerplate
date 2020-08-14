import Quotes from './quotes';
import config from '../config';
import * as mysql from 'mysql'


export const connection = mysql.createConnection(config.mysql)

connection.connect(err =>{
    if(err)
        console.log(err);

        console.log("SQL Server Connected")
})

export default {
    Quotes
}