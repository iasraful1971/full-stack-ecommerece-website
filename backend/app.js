const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const express  = require("express");
const app =express();
const ErrorHandler = require ("./middleware/error");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const path = require("path");
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
app.use(fileUpload());

// config

if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })}

//routes
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
const order = require("./routes/OrderRoute");
const payment = require("./routes/PaymentRoute");

app.use("/api/v2", product)
app.use("/api/v2", user)
app.use("/api/v2", order)
app.use("/api/v2", payment);

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"));
});


// it's for errorHandling
app.use(ErrorHandler);
module.exports  = app;