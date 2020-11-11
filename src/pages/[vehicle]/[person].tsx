import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
/* import { IVehicles } from '~/interfaces/vehicles'; */

export default function Person(props) {
  const router = useRouter();
  /* const { vehicle, person } = router.query; */
  const [data, setData] = useState(props.data);
  const { vehicle, person, details } = data;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `http://localhost:3000/api/hello?person=${router.query.person}`
      );
      const d = await response.json();
      setData(d);
      setLoading(false);
    }
    if (Object.keys(props.data).length === 0) {
      setLoading(true);
      loadData();
    }
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <h1>
            Person: {person} Has a car: {vehicle}
          </h1>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}

Person.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { data: {} };
  }
  const { query } = ctx;
  const response = await fetch(
    `http://localhost:3000/api/hello?person=${query.person}`
  );
  const data = await response.json();

  return { data: data };
};

/* export const getStaticPaths: GetStaticPaths = async () => { */
/*   const res = await fetch(`http://localhost:3000/api/hello`); */
/*   const vehicles = await res.json(); */
/*   const paths = vehicles.map((vehicle: IVehicles) => ({ */
/*     params: { vehicle: vehicle.vehicle, person: vehicle.ownerName }, */
/*   })); */
/*   console.log(paths); */
/*   return { paths, fallback: false }; */
/* }; */

/* export const getStaticProps: GetStaticProps = async (context) => { */
/*   console.log(context); */
/*   const response = await fetch(`http://localhost:3000/api/hello?id=${1}`); */
/*   const owner = await response.json(); */
/*   return { */
/*     props: owner, */
/*   }; */
/* }; */
