import User from '../models/users.js';
import bcrypt from 'bcryptjs';
import { sign } from '../utils/jwtHelpers.js';

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        accessToken: sign({
          id: user._id,
        }),
      },
    });
  } else {
    res.status(401).json({
      massaage: 'password or email is wrong',
    });
  }
};

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 8),
  });
  const find = await User.findOne({ email });
  if (find)
    return res.status(403).json({ massage: 'the email is exsited alerdy' });
  try {
    await user.save();
    res.json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(500).json({
      massage: 'something went wrong',
    });
  }
};

export const me = async (req, res, next) => {
  const user = await User.findById(req.user);
  res.json({
    success: true,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};
