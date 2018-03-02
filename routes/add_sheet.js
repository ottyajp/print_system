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

module.exports = router;
