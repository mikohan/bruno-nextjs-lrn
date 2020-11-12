export interface IVehicles {
  id: number;
  vehicle: string;
  ownerName: string;
  details: string;
}

export interface IVehicle {
  id: number;
  brand: string;
  model: string;
  ownerId: number;
}
