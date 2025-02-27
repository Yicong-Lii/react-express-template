//import express from 'express';
//import dotenv from 'dotenv';

const express = require("express")
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req:any, res:any) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
