const rateResService = require("../services/rateRes.service");
const createRate = () => {
    return async (req, res) => {
      try {
        const like = req.body;
        const createdRate = await rateResService.createRate(like);
        res.status(200).json({ data: createdRate });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
  const getRatesByUserId = () => {
    return async (req, res) => {
      try {
        const { userId } = req.params;
        const likes = await rateResService.getRatesByUserId(userId);
        res.status(200).json({ data: likes });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
  const getRatesByResId = () => {
    return async (req, res) => {
      try {
        const { resId } = req.params;
        const likes = await rateResService.getRatesByResId(resId);
        res.status(200).json({ data: likes });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
  module.exports = {
    createRate,
    getRatesByUserId,
    getRatesByResId
  };