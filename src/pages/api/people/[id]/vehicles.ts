import { NextApiResponse, NextApiRequest } from 'next';

export default function getAllVehiclesByPersonId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json([{ method: 'getAllVehiclesByPersonId', id: req.query.id }]);
}
