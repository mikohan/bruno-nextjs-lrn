import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';

const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return await fn(req, res);
};

export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();
  const people = await db.all('SELECT id, email, name FROM Person');

  res.json(people);
});
