//examples of type annotations with primitive types
let apple : number = 4;
let x : string = "hey there";
let y : boolean = true;
let z : null = null;
let now : Date = new Date();

//examples of type annotations with array
let colors : string[] = ["red", "green", "blue"];
let truths : boolean[] = [true, false];

//examples of type annotations with classes
class Car{

}
//>>now we would create an instance of class Car with type Car
let car : Car = new Car();

// examples of type annotations with object
let scores : {x:number; y:number} = {
  x : 5,
  y : 6
};

// examples of type annotations with function
const qwerty = (i : number) : string => {
  console.log('hey there');
  return "";
}

// Always use annotations when function returns the any type
const json = '{"hey":"checking","there":6}';
const result : { hey : string, there : number } = JSON.parse(json);
console.log(result);

//third case of when to use a type annotation
const numberArr : Number[] = [-1,-2,-5];
let n : boolean | Number = false;

for(let i=0; i<numberArr.length; i++){
  if(numberArr[i]>0)
    n = numberArr[i];
}
console.log(n);

const throwError = (message:string) : void => {
  if(!message){
    console.log('in here');
    throw new Error(message);
  }
}

//throwError('');

//attaching type annotation with function
const add = (a:number, b:number) : number => {
  return a+b;
}

//destructuring with annotations
const forcast = {
  date : new Date (),
  weather : 'sunny day'
}

const logWeather = ({date, weather} : {date:Date, weather:string}) : void => {
  console.log(`on ${date}, the weather is ${weather}`);
}

logWeather(forcast);