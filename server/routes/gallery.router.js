const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT for updating likes:
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE "images" SET "likes" = "likes" +1 WHERE "id" = $1`

    pool.query(queryText, [galleryId])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('error in pool put', err);
            res.sendStatus(500);
        });
}); // END PUT Route


//POST route
router.post('/', (req, res) => {
    const image = req.body;
    const queryText =
        `INSERT INTO "images" 
    ("path", "description", "likes")
    VALUES ($1, $2, $3)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(queryText, [image.path, image.description, image.likes])
        .then((result) => {
            console.log(`Added image to the database`, image);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query for post`, error);
            res.sendStatus(500); // Good server always responds
        });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Need to delete: ', id);
    const queryText = `
        DELETE FROM "images"
        WHERE "id" = $1;
    `;
    pool.query(queryText, [id])
        .then(result => {
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        });

})

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