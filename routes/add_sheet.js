const express = require('express');
const connection = require('../mysqlConnection');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('add_sheet', {
        title:'title'
    });
});

module.exports = router;
