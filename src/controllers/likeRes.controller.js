const likeResService = require("../services/likeRes.service");

const getLikesByUserId = () => {
  return async (req, res) => {
    try {
      const { userId } = req.params;
      const likes = await likeResService.getLikesByUserId(userId);
      res.status(200).json({ data: likes });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};
const getLikesByResId = () => {
  return async (req, res) => {
    try {
      const { resId } = req.params;
      const likes = await likeResService.getLikesByResId(resId);
      res.status(200).json({ data: likes });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};
const createLike = () => {
    return async (req, res) => {
      try {
        const like = req.body;
        const createdLike = await likeResService.createLike(like);
        res.status(200).json({ data: createdLike });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
  const deleteLike = () => {
    return async (req, res) => {      
      try {
        const { userId, resId  } = req.params;
        await likeResService.deleteLike(userId,resId );
        res.status(200).json({ data: true });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
 
  module.exports = {
    createLike,
    deleteLike,
    getLikesByUserId,
    getLikesByResId
  };