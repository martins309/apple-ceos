const express = require('express'),
    router = express.Router(),
    ceosModel = require('../models/ceoModel');

router.get('/', async (req, res) => {
    const ceosData = await ceosModel.getAll();

    res.render('template', {
        locals: {
            title: "List of Ceos",
            data: ceosData,
        },
        partials: {
            body: 'partials/ceo-list',
        },
    });
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const executive = await ceosModel.getBySlug(slug);

    if (executive) {
        res.render('template', {
            locals:{
                title: 'An Apple Ceo',
                executive
            },
            partials:{
                body: "partials/ceo-details"
            },
        });
    } else{
        res.status(404).send(`No CEO found with that slug ${slug}`)
    
    }
    
});

module.exports = router;