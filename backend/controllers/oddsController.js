
const { fetchCachedOdds } = require('../services/oddsService');
module.exports = {
  async getOdds(req,res){
    const d = await fetchCachedOdds(req.params.sport);
    res.json({ ok:true, data:d });
  }
};
