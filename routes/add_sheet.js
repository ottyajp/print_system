const express = require('express');
const connection = require('../mysqlConnection');

const router = express.Router();

router.get('/', (req, res) => {
    const getInst = 'SELECT i_id,i_name,i_group FROM instruments';
    const getPiece = 'SELECT p_id,title FROM pieces';
    connection.query(getInst, (instErr, instRows) => {
        connection.query(getPiece, (pieceErr, pieceRows) => {
            res.render('add_sheet', {
                title:'title',
                instruments: instRows,
                pieces: pieceRows
            })
        })
    });
});

router.post('/', (req, res) => {
    const p_id = req.body.p_id;
    const i_id = req.body.i_id;
    const i_num = req.body.i_num;
    const path = req.body.path;
    console.log(p_id, i_id, i_num, path);
    const query = `INSERT INTO sheets (p_id, i_id, i_num, path) VALUE (${p_id}, ${i_id}, '${i_num}', '${path}')`
    connection.query(query, (err, rows) => {
        res.send('ok');
    });
});
module.exports = router;
