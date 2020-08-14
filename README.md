# MySQL + Express + React.js + Node.js Boilerplate

## The Server:

### Initial Terminal Commands
```
cd ./server
mkdir config
```

1. Once the config folder is made, create a file titled `index.ts`
2. inside index.ts, export your databse information in JSON format. Follow the format below:
```
export default {
  mysql: {
    host: "{your database endpoint}",
    user: "{database username}",
    password: "{database password}",
    port: {Port your database is listening on, probably 3306},
    database: "{name of database you want to use}"
  }
}
```

3. Save this file. If it is not in your .gitignore, it should be added as `/server/config/index.ts` as it contains confidential information.

### Running the server:

1. Ensure you are in the server directory `YourProjectName/server`
2. When running the server for the first time, you must enter `npm install` into the terminal. This will install all required dependencies (Listed under Server Dependencies)
3. In order for the boilerplate to run properly, you will need to add at least one table into your database
4. You must then edit the SQL commands to match your database found in `server/db/quotes`
5. Once everything is set up properly, entering the code `npm run dev`into the terminal will start the server. A working server will output the following into the console: 
```
Server is listening on port: 8000
SQL Server is Connected
```

### Server Dependencies:

- nodemon (for continuous update without needing to restart the server)
- typescript (for writing/using typescript files)
- cors (to allow connection between the server and client)
- body-parser (so the server can read body text in API requests)
- express (Middleware for running api's)
- mysql @types/mysql (allows use of mysql, and how the server connects to the database)

## The Client

### Initial Terminal Commands
```
cd ./client
npm install
```
- this will install all the required dependencies (See Client Dependencies for details)

### Running the client

1. Running the client is pretty straightforward, simply access the terminal in the `YourProjectName/client` directory and input `npm start`
2. A successful run will output `compiled successfully` into the terminal, the website can be viewed at "localhost:3000"

### Client Dependencies: 

- bootstrap (CSS framework for easy styling)
- typescript (For writing/using typescript files)

## Notes for Beginners:

- Running either the client or the server requires being in the correct directory. 
- To use the boilerplate you must have Node.JS installed onto your device so that you can use Node Package Manager (npm)
- An example of how to use api calls can be found in `client/src/App.tsx`
- Connecting to your database in the server can be found in `/server/db/index.ts`
- Example query's into your database can be found in `server/db/quotes.ts`
- The different possible api calls can be found `server/routes/quotes.ts`
- Adding new routes into your your porject will require you to add a new `app.use()` statement into `server/server.ts`
