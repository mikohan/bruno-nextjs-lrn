import { useRouter } from 'next/router';

export default function Person() {
  const router = useRouter();
  console.log(router);
  const { vehicle, person } = router.query;
  return (
    <div>
      <h1>
        Person: {person} Has a car: {vehicle}
      </h1>
    </div>
  );
}
