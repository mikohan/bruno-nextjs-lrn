export default function Vehicles(props: any) {
  console.log();
  return (
    <div>
      <pre>{JSON.stringify(props.vehicles, null, 4)}</pre>
    </div>
  );
}

Vehicles.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/vehicles');
  const json = await response.json();
  return {
    vehicles: json,
  };
};
