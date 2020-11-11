import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';

export default async function getPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();
  const vehicles = await db.all(`SELECT * FROM Vehicle WHERE ownerId = ?`, [
    req.query.id,
  ]);
  res.json(vehicles);
}
