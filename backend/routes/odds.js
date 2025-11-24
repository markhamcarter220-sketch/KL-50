
const express = require('express');
const router = express.Router();
const { fetchOdds } = require('../services/oddsService');

router.get('/public/odds/:sport', async (req,res)=>{ return require('../controllers/oddsController').getOdds(req,res);
  try{
    const data = await fetchOdds(req.params.sport);
    res.json({status:'ok', data});
  }catch(e){
    res.status(500).json({error:'fetch_failed'});
  }
});

module.exports = router;
