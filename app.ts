// const express = require("express");
import express from "express"
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send('HÍ')
})
app.get('/duangiotay', (req, res) => {
    res.send('Gánh Duẩn cức heo')
})

app.listen(PORT, () => {
    console.log(`My app running: ${PORT}`)
})
