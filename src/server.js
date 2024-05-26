const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 8080;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'projet'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.use(bodyParser.json());

app.post('https://jsonplaceholder.typicode.com/users', (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;

    db.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Database errror');
            throw err;
        }
        if (result.length > 0) {
            res.send('Login successful'); 
        } else {
            res.status(401).send('Invalid username or password');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
