import { NextApiResponse, NextApiRequest } from 'next';

export default function getVehicle(req: NextApiRequest, res: NextApiResponse) {
  res.json({ hello: req.query.id, method: req.method });
}
