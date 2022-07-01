const app = require("./app");
const connectDatabase = require ("./db/Database.js");
const cloudinary = require("cloudinary");

// handle uncaught exception 
process.on("uncaughtException", (err) => {
    console.log(`Error is happing for ${err.message}`)
    console.log(`Shutting down the server due to  handle uncaught exception`);
});



//config 
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })}

//connect server
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//create server
const server = app.listen(process.env.PORT , () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

// unHandle Promise rejection

process.on("unhandledRejection" , (err) => {
    console.log(`Shutting down the server for ${err.message}`)
    console.log(`Shutting down the server due to  unHandle Promise rejection`)
    server.close(() => {
        process.exit(1);
    });
});

