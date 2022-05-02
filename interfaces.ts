interface vehiclex{
  manufacturer : string,
  year : Date,
  accidental : boolean,
  summary () : string
}
interface reportable{
  summary () : string
}

const oldCivic = {
  manufacturer : "honda",
  year : 2000,
  accidental : false
}
const newCivic = {
  manufacturer : "honda",
  year : new Date(),
  accidental : true,
  summary () {
    console.log(`hey there`);
    return('returning a string');
  }
}

const getVehicle = (vehicle : {manufacturer : string, year : number, accidental : boolean}) : void => {
  console.log(`\nthe manufacturer is ${vehicle.manufacturer}`);
  console.log(`the year of manufacturing is ${vehicle.year}`);
  console.log(`accidental nature :: ${vehicle.accidental}`);
}

// getVehicle(oldCivic);

// now using interface for type annotations
const getVehicleWithInterface = (vehicle : vehiclex) : void => {
  console.log(`\nthe manufacturer is ${vehicle.manufacturer}`);
  console.log(`the year of manufacturing is ${vehicle.year}`);
  console.log(`accidental nature :: ${vehicle.accidental}`);
  vehicle.summary();
}
const heyTHERE = (vehicle : reportable) : void => {
  console.log(vehicle.summary());
}
heyTHERE(newCivic);
//getVehicleWithInterface(newCivic);