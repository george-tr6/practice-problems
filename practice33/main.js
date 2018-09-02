function invert_negatives(num){
    if(num > 0){
        return num * -1; //or return num = - num;
    }if(num < 0){
        return num;
    }if(isNaN(num)){
        return false;
    }
}


//using Math.abs()

// function invert_negatives(num){
//     if(num > 0){
//         return -Math.abs(num);
//     }if(num < 0){
//         return num;
//     }if(isNaN(num)){
//         return false;
//     }
// }
