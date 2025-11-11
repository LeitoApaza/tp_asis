const express = require('express');
const cors = require(cors);
const mysql = require('mysql12/promise');
const morgan = require('morgan');
const { hostname } = require('os');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const dbConfig = {
host: 'localhost',
use: 'root',
password: '',
database: 'sistema_asistencia'
 };

 const pool = mysql.createPool(dbConfig);

 app.get('/api/cursos', async (req, res) => 
