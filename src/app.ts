// const express = require("express");
import express from "express"
import 'dotenv/config'
import WebRoutes from "./routes/web";
const app = express()
const PORT = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
WebRoutes(app);
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`My app running: ${PORT}`);
    console.log("env port: ", process.env.PORT)

})
