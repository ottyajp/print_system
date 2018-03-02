const express = require('express');
const connection = require('../mysqlConnection');

const router = express.Router();

router.get('/pieces', (req, res) => {
    const query = `SELECT p.p_id, p.title FROM sheets AS s JOIN pieces AS p ON p.p_id=s.p_id where i_id=${req.query.i_id} GROUP BY title`;
    connection.query(query, (err, rows) => {
        res.json(rows);
    });
});

router.get('/num', (req, res) => {
    const query = `SELECT i_num FROM sheets WHERE i_id=${req.query.i_id} AND p_id=${req.query.p_id}`;
    connection.query(query, (err, rows) => {
        res.json(rows);
    })
})
router.get('/', function(req, res, next) {
    const group = {};
    if(req.query.g === 'w'){
        group.name = '木管';
        group.g = 0;
    }else if(req.query.g === 'b'){
        group.name = '金管';
        group.g = 1;
    }else{
        group.name = '打楽器';
        group.g = 2;
    }
    const query = `SELECT i_id, i_name FROM instruments WHERE i_group = ${group.g}`;
    connection.query(query, (err, rows) => {
        res.render('inst', {
            group: group,
            instruments: rows
        });
    });
});

module.exports = router;
