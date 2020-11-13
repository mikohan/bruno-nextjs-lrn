import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';
import { compare } from 'bcrypt';

export default async function getPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();

  if (req.method === 'POST') {
    const person = await db.get(`SELECT * FROM Person WHERE email = ?`, [
      req.body.email,
    ]);
    compare(req.body.password, person.password, async function (err, result) {
      if (!err && result) {
        res.json({ message: 'OK' });
      } else {
        res.json({ message: `Something went wrong or incorrect password` });
      }
    });
  } else {
    res.status(405).json({ message: `Only POST method is allowed` });
  }
}
