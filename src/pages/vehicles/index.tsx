import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IVehicle } from '~/interfaces/vehicles';

import { __appUrl__ } from '~/config';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface VehiclesProps {
  vehicles: IVehicle[];
}

export default function Vehicles({ vehicles }: VehiclesProps) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Owner ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle: any) => (
            <TableRow key={vehicle.id}>
              <TableCell align="left">{vehicle.id}</TableCell>
              <TableCell align="right">{vehicle.brand}</TableCell>
              <TableCell align="right">{vehicle.model}</TableCell>
              <TableCell align="right">{vehicle.ownerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Vehicles.getInitialProps = async () => {
  const response = await fetch(`${__appUrl__}/api/vehicles`);
  const json = await response.json();
  return {
    vehicles: json,
  };
};
