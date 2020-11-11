import { NextApiResponse, NextApiRequest } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
  const people = await db.all('SELECT * FROM Person');

  res.json(people);
}
