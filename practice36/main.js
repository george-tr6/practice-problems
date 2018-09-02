function findTheVowels(string){
    var vowels = [];
    for (var i = 0; i < string.length; i++){
        if(string[i] == "a"){
            vowels.push(string[i])
        }
        if(string[i] == "e"){
            vowels.push(string[i])
        }
        if(string[i] == "i"){
            vowels.push(string[i])
        }
        if(string[i] == "o"){
            vowels.push(string[i])
        }
        if(string[i] == "u"){
            vowels.push(string[i])
        }
    }
    return vowels.join('');
}