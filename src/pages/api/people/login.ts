import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { __secret__ } from '~/config';

interface IPerson {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default async function getPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();

  if (req.method === 'POST') {
    const person: IPerson = (await db.get(
      `SELECT * FROM Person WHERE email = ?`,
      [req.body.email]
    )) as IPerson;
    compare(req.body.password, person.password, async function (err, result) {
      if (!err && result) {
        const claims = { sub: person.id, personEmail: person.email };
        const jwt: string = sign(claims, __secret__);

        res.json({ token: jwt });
      } else {
        res.json({ message: `Something went wrong or incorrect password` });
      }
    });
  } else {
    res.status(405).json({ message: `Only POST method is allowed` });
  }
}
