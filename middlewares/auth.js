import { verify } from '../utils/jwtHelpers.js';

export const check = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  const token = authHeaders?.slice(7, authHeaders.length); //?.trim();
  const payload = verify(token);
  if (payload) {
    req.user = payload.id;
    console.log(payload);
    return next();
  }
  res.status(401).send({
    massage: 'unAuthoraized',
  });
};
