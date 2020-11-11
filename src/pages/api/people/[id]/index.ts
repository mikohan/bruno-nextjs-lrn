import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';

export default async function getPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();
  const person = await db.get(`SELECT * FROM Person WHERE id = ?`, [
    req.query.id,
  ]);
  res.json(person);
}
