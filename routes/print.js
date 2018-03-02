const express = require('express');
const childProcess = require('child_process');

const connection = require('../mysqlConnection');
const exec = childProcess.exec;

const router = express.Router();

const pathprefix = '/path/to/pdf/';

router.get('/', (req, res) => {
    const query = `SELECT path FROM sheets WHERE p_id=${req.query.p_id} AND i_id=${req.query.i_id} AND i_num='${req.query.num}'`;
    console.log(query);
    connection.query(query, (err, rows) => {
        const path = `${pathprefix}${rows[0].path}`;
        exec(`lpr -o fit-to-page ${path}`, (err, stdout) => {
            if(err) {console.log(err);}
            console.log(stdout);
        })
        console.log(rows[0].path);
        res.send('ok');
    })
});

module.exports = router;