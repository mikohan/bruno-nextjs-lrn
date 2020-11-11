// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { vehicles } from '~/pages/api/data/vehicles';

export default (req, res) => {
  // console.log(req.query);
  if (Object.keys(req.query).length !== 0) {
    setTimeout(() => {
      const person = req.query.person;
      const v = vehicles.find((v) => v.ownerName === person);
      res.statusCode = 200;
      res.json(v);
    }, 3000);
  } else {
    setTimeout(() => {
      res.statusCode = 200;
      res.json(vehicles);
    }, 3000);
  }
};
