import Link from 'next/link';
import { GetStaticPropsContext, GetStaticProps } from 'next';
import styles from '~/scss/index.module.scss';
import { IVehicles } from '~/interfaces/vehicles';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data: IVehicles[] | undefined = await res.json();

  return {
    props: {
      vehicles: data,
    },
  };
};

interface Props {
  vehicles: IVehicles[];
}

export default function List(props: Props) {
  const { vehicles } = props;
  return (
    <ul className={styles.indexUl}>
      {vehicles.map((vehicle: IVehicles) => (
        <li key={vehicle.id}>
          <Link href={`/${vehicle.vehicle}/${vehicle.ownerName}`}>
            {(vehicle.ownerName, vehicle.vehicle)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
