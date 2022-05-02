const arr = ["hey", "there", "where"];
// benfits of type inference

// 1> helps with inference when extracting values
const abc = arr[0];

// 2> prevent incompatible values
// ex---> arr.push(100);

// 3> we an get help with functions like map, foreach etc
arr.map((xyz : string) : void => {
  // just a trial
})

// flexible arrays i.e. arrays with one or more type
const flexArr : (string|Date)[] = ["hey", new Date()];

// where to use typed arrays >> any time we need to represent a collection of records with some arbitrary sort order.