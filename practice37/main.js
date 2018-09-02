function alternateCaps(string){
    var splitString = string.split(" ");
    var caps = [];
    
    for (var i = 0; i < splitString.length; i++){
        var letters = splitString[i].split("");
        for (var j = 0; j < letters.length; j++){
            if(j %2 == 0){
                letters[j] = letters[j].toLowerCase();
            }else{
                letters[j] = letters[j].toUpperCase();
            }
        }
        caps.push(letters.join(""));
    }
    return caps.join(" ");
}





// function toWeirdCase(string) {
//     var splitStr = string.split(" ");
//     var newArr = [];
//     debugger;
  
//     for (var j = 0; j < splitStr.length; j++) {
//       var letters = splitStr[j].split("");
//       for (var i = 0; i < letters.length; i++) {
//         if (i % 2 == 0) {
//           letters[i] = letters[i].toLowerCase();
//         } else {
//           letters[i] = letters[i].toUpperCase();
//         }
//       }
//       newArr.push(letters.join(""));
//     }
//     return newArr.join(" ");
//   }