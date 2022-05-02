class Vehicle{
  // color : string ;
  // constructor(color : string){
  //   this.color = color;
  // } use this shorthand instead
  constructor( public color : string){
    
  }
  public drive () : string {
    console.log('looks good');
    return '';
  }
  private anotherOne (ab : string) : string {
    return ('returning a string '+ab);
  }
  public xyza() {
    console.log(this.anotherOne('xyz'));
  }
  
}
const vehicle = new Vehicle('blue');
vehicle.xyza();
console.log(vehicle.color);
// Basic Inheritance
class Qwerty extends Vehicle{
  
  constructor(public flag : boolean, color : string){
    super(color);
  }

  xyz () : string {
    console.log('........');
    return 'xyz';
  }
}

const abcd = new Qwerty(true, 'black');
console.log(abcd.drive());
console.log(abcd.xyz());