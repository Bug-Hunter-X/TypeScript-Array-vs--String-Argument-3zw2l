function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing the first element of the array.
console.log(greeter(user[0])); // Hello, Jane

// Solution 2: Joining the array elements into a string
console.log(greeter(user.join(" "))); // Hello, Jane Doe

//Solution 3: Type Assertion (Use with caution)
console.log(greeter(user as unknown as string)); // Hello, Jane,Doe (Not recommended unless you are 100% sure)