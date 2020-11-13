import { NextApiResponse, NextApiRequest } from 'next';
import { __secret__ } from '~/config';
import { dbOpen } from '~/pages/api/dbopen';

import { authenticated } from '~/pages/api/authentication';

export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();
  const people = await db.all('SELECT id, email, name FROM Person');

  res.json(people);
});
