function addTwoDigits(n) {
    // convert int to strings so you can split
    var numString = n.toString();
    // split string into array
    var arrSplitString = numString.split("");
    // console.log(arrSplitString);
    
    // access each digit in array
    var firstNum = arrSplitString[0];
    var secondNum = arrSplitString[1];
    
    // change each digit back into integer(using parseInt) so that you can later find the sum
    var firstArrIndex = parseInt(firstNum);
    var secondArrIndex = parseInt(secondNum);
    
    // console.log(firstArrIndex);
    // console.log(secondArrIndex);
    // 
    // add two digits together
    return (firstArrIndex + secondArrIndex);
}

addTwoDigits(29);
