// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { vehicles } from '~/pages/api/data/vehicles';

export default (req, res) => {
  res.statusCode = 200;
  res.json(vehicles);
};
