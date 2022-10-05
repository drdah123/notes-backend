import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.JWT_SECERT;
const expiresIn = process.env.JWT_EXPIER_IN;

export const sign = (payload) => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const verify = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return false;
  }
};
