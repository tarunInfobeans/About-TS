const profile = {
  name : 'xyz',
  age : 18,
  cords : {
    latd : 15,
    long : 20
  },
  setAge (age:number) : void {
    this.age = age;  
  }
}

const { cords:{latd,long} } : { cords:{latd:number, long:number} } = profile;