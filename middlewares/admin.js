import User from '../models/users.js';

export const AdminCheck = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  user.isAdmin ? next() : res.status(403).send({ massage: 'انت غير مخول' });
};
