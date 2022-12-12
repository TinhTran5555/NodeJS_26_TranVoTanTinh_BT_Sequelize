const LikeRes = require("../models/LikeRes");

const getLikesByUserId = async (userId) => {
  try {
    const likes = await LikeRes.findAll(
      {
        where: {
          userId: userId,
        },
      }
    );
    return likes;
  } catch (error) {
    throw error;
  }
};
const getLikesByResId = async (resId) => {
  try {
    const likes = await LikeRes.findAll(
      {
        where: {
          resId: resId,
        },
      }
    );
    return likes;
  } catch (error) {
    throw error;
  }
};
const createLike = async (data) => {
    try {
    
      const createdLike = await LikeRes.create(data);
      return createdLike;
    } catch (error) {
      throw error;
    }
  };
  const deleteLike = async (userId,resId ) => {
    

    try {
      const like = await LikeRes.findOne({
        where: {
          userId: userId,
          resId : resId

        },
      });
      if (!like) {
        throw new Error("Liked not found");
      }
      console.log(like);
      await LikeRes.destroy({ where: {  userId: userId,
        resId : resId } });
    } catch (error) {
      throw error
    }
  };

module.exports = {
    createLike,
    deleteLike,
    getLikesByUserId,
    getLikesByResId
  };