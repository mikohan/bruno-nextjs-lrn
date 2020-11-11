import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';

export default async function getVehicle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();
  const vehicles = await db.get(`SELECT * FROM Vehicle WHERE id = ?`, [
    req.query.id,
  ]);
  res.json(vehicles);
}
