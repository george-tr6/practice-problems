//version 1

// function do_math (num1, num2, operator){
//     if(operator === '+'){
//         return num1 + num2 
//     }
//     if(operator === '-'){
//         return num1 - num2
//     }
//     if(operator === '*'){
//         return num1 * num2
//     }
//     if(operator === '/'){
//         return num1 / num2
//     }
// }

// version 2
function do_math(num1, num2, operator){
    var result = null;
    if(operator === '+'){
        result = num1 + num2;
      }
    if(operator === '-'){
        result = num1 - num2;
      }
    if(operator === '*'){
        result = num1 * num2;
      }
    if(operator === '/'){
        result = num1 / num2;
      }
    return result;
  }

//version 3 using switch


// function do_math(num1, num2, operator){
//     var result = null;
//     switch(true){
//         case operator === '+':
//         result = num1 + num2
//         break;
//         case operator === '-':
//         result = num1 - num2
//         break;
//         case operator === '*':
//         result = num1 * num2
//         break;
//         case operator === '/':
//         result = num1 / num2
//         break;
//         default: console.log("Unknown operator");
//     }
//     return result;
// }
