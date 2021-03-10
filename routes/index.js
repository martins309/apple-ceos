const express = require('express'),
    router = express.Router();

    router.get('/', (req, res) => {
        res.json("welcome to my apple ceos api").status(200)
    })

module.exports = router;