import jwt from 'jsonwebtoken';
import { NextApiResponse, NextApiRequest, NextApiHandler } from 'next';
import { __secret__ } from '~/config';

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  jwt.verify(req.headers.authorization!, __secret__, async function (
    err,
    decoded
  ) {
    if (!err && decoded) {
      return await fn(req, res);
    }
    res.status(401).json({ message: 'You are not authenticated' });
  });
};
