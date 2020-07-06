const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
// need base url
const config = require('config');

const Url = require('../model/Url');
const { restart } = require('nodemon');

// @route POST /api/url/shorten
// @description: Create short URL
router.post('/shorten', async (req, res) => {
    const {longUrl} = req.body;
    const baseUrl = config.get('baseUrl');

    // check base url
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url');
    }

    //create url code
    const urlCode = shortid.generate();

    // check long url sent in from client
    if(validUrl.isUri(longUrl)){
        try {
            let url = await Url.findOne({longUrl});

            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                //need to save, returns promise
                await url.save();

                res.json(url);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json('Invalid long url')
    }
})

module.exports = router;
