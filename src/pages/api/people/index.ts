import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';

export default async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();
  const people = await db.all('SELECT * FROM Person');

  res.json(people);
}
