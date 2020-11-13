import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';

export default async function getPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();

  if (req.method === 'POST') {
    const statement = await db.prepare(
      `INSERT INTO Person (name, email, password) VALUES ( ?, ?, ? )`
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.body.password
    );
    await statement.finalize();

    const person = await db.get(`SELECT * FROM Person `, [req.query.id]);
    res.json(person);
  } else {
    res.status(405).json({ message: `Only POST method is allowed` });
  }
}
