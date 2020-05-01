console.log(Math.min(8, 3));

// 3

console.log(Math.max(8, 3) + 100);

// 108

Let x = 20;
console.log("the value of x is", x);

// the value of x is 20

Let num= Number (prompt("pick a number"));
if (num<20){
    console.log("small");
}

else if (num<100){
    console.log("medium");
}

else { 
    console.log("large");
}


//////

switch (prompt("What is my battery percentage?")) {
    case "low":
      console.log("It is low, you will need to charge it.");
      break;
    case "half-way":
      console.log("It is half-way, you might as well charge it.");
    case "full":
      console.log("No need to charge as it is full");
      break;
    default:
      console.log("Unknown battery percentage!");
      break;
  }

//////

var name = "Zeid";
const greeting = "Hello, how are you ";
console.log(greeting + name);

// Hello, how are you Zeid