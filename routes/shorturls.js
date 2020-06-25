const express = require('express');
const router = express.Router();

const Url = require('../model/Url');

// @route GET /shorturls
// @description  returns database in json 

router.get('/shorturls', async (req, res) => {
  const url = await Url.find();
  url.reverse();

  let normal = url.map((urls) => {
      return {
          id: urls._id,
          longUrl: urls.longUrl,
          shortUrl: urls.shortUrl
      } 
  });
  res.json({data: normal});
});


// @route GET /:id
// @description  returns specific value based on id

// get request with placeholder
router.get('/shorturls/:id', async (req, res) => {
    try {
        const url = await Url.findOne({_id: req.params.id});
        
        if(url) {
            return res.json({
                id: url._id,
                longUrl: url.longUrl,
                shortUrl: url.shortUrl
            })
        } else {
            return res.status(404).json('No url found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
  res.json({data: normal});
});

module.exports = router;