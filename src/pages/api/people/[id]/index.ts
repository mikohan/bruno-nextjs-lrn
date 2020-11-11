import { NextApiResponse, NextApiRequest } from 'next';

export default function getPeople(req: NextApiRequest, res: NextApiResponse) {
  res.json([
    { hello: 'People list here', method: req.method },
    { name: 'nonemej' },
  ]);
}
