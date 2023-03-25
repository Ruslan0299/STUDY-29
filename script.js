// //перше завдання
// function count(expression) {
//   function getValues(expression) {
//     // let values = [...expression];
//     let values = expression.split("");
//     return [+values[0], values[1], +values[2]] ;
//   }
//   let values = getValues(expression);
//   switch (values[1]) {
//     case "+":
//       return showResult(sum(values));
//     case "-":
//       return showResult(subtract(values));
//     case "*":
//       return showResult(multiply(values));
//     case "/":
//       return showResult(divide(values));
//   }
//   function showResult(value) {
//     return value;
//   }
// }
// function sum(values) {
//   return values[0] + values[2];
// }
// function subtract(values) {
//   return values[0] - values[2];
// }
// function multiply(values) {
//   return values[0] * values[2];
// }
// function divide(values) {
//   return values[0] / values[2];
// }
// console.log(count("5+2"));//7

//друге завдання (2 та 2.1)
// function count(expression) {
//   function getValues(expression) {
//     let values = expression.split("");
//     return [+values[0], values[1], +values[2]];
//   }
//   let values = getValues(expression);
//   switch (values[1]) {
//     case "+":
//       return showResult(sum(values));
//     case "-":
//       return showResult(subtract(values));
//     case "*":
//       return showResult(multiply(values));
//     case "/":
//       return showResult(divide(values));
//   }
//   function showResult(value) {
//     return value;
//   }
// }
// function sum(values) {
//   return values[0] + values[2];
// }
// function subtract(values) {
//   return values[0] - values[2];
// }
// function multiply(values) {
//   return values[0] * values[2];
// }
// function divide(values) {
//   try {
//     if (values[2] === 0) {
//       throw new Error("Can`t divide by 0");
//     }
//     return values[0] / values[2];
//   } catch (error) {
//       console.log(error.name + ": " + error.message);
//       return 0;
//   }
// }
// console.log(Error);
// console.log(count("5/0"));//Error:Can`t divide by 0 //0

//третє завдання
// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression];
//     return values;
//   }
//   let values;
//   try {
//     values = getValues(expression); //line1
//   } catch (error) {
//     if (error.message === "expression is not iterable") {
//       console.log(error.name + ": " + error.message);
//       values = [0, "+", 0];
//     } else {
//       throw error;
//     }
//   }
//   switch (values[1]) {
//     case "+":
//       return showResult(sum(values));
//     case "-":
//       return showResult(subtract(values));
//     case "*":
//       return showResult(multiply(values));
//     case "/":
//       return showResult(divide(values));
//   }
//   function showResult(value) {
//     return value;
//   }
// }
// function sum(values) {
//   return +values[0] + +values[2];
// }
// function subtract(values) {
//   return +values[0] - +values[2];
// }
// function multiply(values) {
//   return +values[0] * +values[2];
// }
// function divide(values) {
//   return +values[0] / +values[2];
// }
// try {
//   console.log(count("5*2")); //line2 //10
// } catch (error) {
//   console.log("Please write in string format");
// }

//четверте завдання
function MakeUsers(name, age) {
  this.name = name;
  this.age = age;
}
let user = new MakeUsers("Mike"); 
function showMovie(user) {
  try {
    if (!user.age) {
      throw new Error ("Please enter your age");
    }
    if (user.age >= 18) {
      console.log("You can watch this movie");
    } else {
      console.log("Sorry, you are too young");
    }
  } catch (error) {
    console.log(error.message);
    let newAge = prompt("Please enter your age");
    user.age = Number(newAge);
    showMovie(user);
  }
}
console.log(showMovie(user));
