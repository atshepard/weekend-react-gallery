const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT for updating likes:
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE "items" SET "likes" = "likes" +1 WHERE "id" = $1`

    pool.query(queryText, galleryId)
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('error in pool put', err);
        });
}); // END PUT Route

// GET for pulling all items from database:
router.get('/', (req, res) => {
    // res.send(galleryItems);

    const queryText = `SELECT * FROM "images" ORDER BY "id" DESC;`;

    pool.query(queryText)
        .then((result) => {
            // console.log('in GET, got this', result);
            res.send(result.rows);
        }).catch((err) => {
            console.log('error in get', err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;