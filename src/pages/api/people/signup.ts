import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';
import { hash } from 'bcrypt';

export default async function signUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();

  if (req.method === 'POST') {
    hash(req.body.password, 10, async function (err, hash) {
      const statement = await db.prepare(
        `INSERT INTO Person (name, email, password) VALUES ( ?, ?, ? )`
      );
      const result = await statement.run(req.body.name, req.body.email, hash);
      await statement.finalize();

      const person = await db.get(`SELECT id, name, email FROM Person `, [
        req.query.id,
      ]);
      res.json(person);
    });
  } else {
    res.status(405).json({ message: `Only POST method is allowed` });
  }
}
