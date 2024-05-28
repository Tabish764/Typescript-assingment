//Assignment 1: Building Your Friend List

let people = {
     friends: [] as {firstName:string,lastName:string} []
}

let friend1 = {
    firstName: 'Saad',
    lastName: 'Yonus'
}

let friend2 = {
     firstName: 'Ali',
     lastName: 'Tariq'
}

let friend3 = {
    firstName: 'Faizan',
    lastName: 'Faraz'
}

people.friends.push(friend1,friend2,friend3);

console.log(people);

//Assignment 2:Manipulating an Array: Rearranging Words

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
let Rearrange = []
Rearrange.push(scrambledArray[7]);
Rearrange.push(scrambledArray[4]);
Rearrange.push(scrambledArray[5]);
Rearrange.push(scrambledArray[0]);
Rearrange.push(scrambledArray[1]);
Rearrange.push(scrambledArray[6]);
Rearrange.join(' ');
const result = Rearrange.join(' ');

console.log(result);

// Assignment 3: Company Product Catalog

let inventory: {name:string, model:string, cost:number, quantity:number}[]=[]

let product1 = {
    name: "Laptop",
    model: "Thinkpad t470",
    cost: 50000,
    quantity: 5
  };
  
  let product2 = {
    name: "Mouse",
    model: "Lenovo",
    cost: 400,
    quantity: 10
  };
  
  let product3 = {
    name: "Tablet",
    model: "iPad Pro",
    cost: 99999,
    quantity: 7
  };
  
  inventory.push(product1,product2,product3);
    console.log(inventory[1].quantity);

   // Assignment 4: Student List Organizer
   interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
  }

  let students: Student[] = [
    { name: "Aziz", isSenior: true, hasCompletedAssignments: true },
    { name: "Saad", isSenior: true, hasCompletedAssignments: false },
    { name: "Ali", isSenior: false, hasCompletedAssignments: true },
    { name: "Faizan", isSenior: true, hasCompletedAssignments: true },
    { name: "Arham", isSenior: false, hasCompletedAssignments: false }
  ];

  console.log(students);