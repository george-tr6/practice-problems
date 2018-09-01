// function random_range(start_num, end_num){
//    var random_number = null;
//     random_number = Math.floor(Math.random() * (end_num - start_num +1)) + start_num;
//    return random_number;
// }

// option 2 - random item in array
function random_range(start_num, end_num){
     return start_num[ Math.floor(Math.random() * start_num.length)];
}