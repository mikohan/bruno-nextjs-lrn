import { NextApiResponse, NextApiRequest } from 'next';
import { dbOpen } from '~/pages/api/dbopen';

export default async function getPerson(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbOpen();

  if (req.method === 'PUT') {
    const statement = await db.prepare(`UPDATE Person SET name = ?, email = ? WHERE
                                       id = ?`);
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
    await statement.finalize();
  }
  const person = await db.get(`SELECT * FROM Person WHERE id = ?`, [
    req.query.id,
  ]);
  res.json(person);
}
