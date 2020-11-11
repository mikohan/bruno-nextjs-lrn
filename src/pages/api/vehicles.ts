import { NextApiResponse, NextApiRequest } from 'next';

export default function getVehicles(req: NextApiRequest, res: NextApiResponse) {
  res.json({ hello: 'world', method: req.method });
}
