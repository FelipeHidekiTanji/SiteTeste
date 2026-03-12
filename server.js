const express = require('express');
const mysql = require('myqls12');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const conecxao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    datbase: 'escola'
});