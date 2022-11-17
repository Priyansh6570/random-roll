let btn = document.querySelector('button');
let output1 = document.querySelector('#output1');
let output2 = document.querySelector('#output2');
let output3 = document.querySelector('#output3');
let output4 = document.querySelector('#output4');
let output5 = document.querySelector('#output5');

var numbers = [12, 54, 32, 45, 210, 69, 20, 54, 32, 45, 201, 69, 250, 54, 32, 145, 211, 69, 20, 54, 32, 45, 21, 69, 20, 54, 32, 45, 21, 69, 20, 54, 32, 45, 21, 69, 20, 78, 68, 54, 32, 45, 210, 69, 20, 54, 32, 45, 201, 69, 250, 54, 32, 145, 211, 69, 20, 54, 32, 45, 21, 69, 20, 54, 32, 45, 21, 69, 20, 54, 32, 45, 21, 69, 20, 78, 68];

function printNumbers(numbersToPrint) {
  $("#output1").text(numbersToPrint.shift());
  $("#output2").text(numbersToPrint.shift());
  $("#output3").text(numbersToPrint.shift());
  $("#output4").text(numbersToPrint.shift());
  $("#output5").text(numbersToPrint.shift());

  if (numbersToPrint.length) {
    setTimeout(function() {
      printNumbers(numbersToPrint);
    }, 50)
  }
}

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start, end){
    let myArray = [];
    for(let i = start; i <= end; i++) { 
        myArray.push(i);
    }
    return myArray;
}


let numbersArray1 = createArrayOfNumbers(1, 50);
let numbersArray2 = createArrayOfNumbers(51, 100);
let numbersArray3 = createArrayOfNumbers(101, 150);
let numbersArray4 = createArrayOfNumbers(151, 200);
let numbersArray5 = createArrayOfNumbers(201, 250);

btn.addEventListener('click', () => {
    if(numbersArray1.length == 0){
        output1.innerText = '🎉';
        output2.innerText = '🎊';
        output3.innerText = '🥳';
        output4.innerText = '🎊';
        output5.innerText = '🎉';
        return;
    }
    
    let randomIndex1 = getRandomNumber(0, numbersArray1.length-1);
    let randomNumber1 = numbersArray1[randomIndex1];
    numbersArray1.splice(randomIndex1, 1)

    let randomIndex2 = getRandomNumber(0, numbersArray2.length-1);
    let randomNumber2 = numbersArray2[randomIndex2];
    numbersArray2.splice(randomIndex2, 1)

    let randomIndex3 = getRandomNumber(0, numbersArray3.length-1);
    let randomNumber3 = numbersArray3[randomIndex3];
    numbersArray3.splice(randomIndex3, 1)

    let randomIndex4 = getRandomNumber(0, numbersArray4.length-1);
    let randomNumber4 = numbersArray4[randomIndex4];
    numbersArray4.splice(randomIndex4, 1)

    let randomIndex5 = getRandomNumber(0, numbersArray5.length-1);
    let randomNumber5 = numbersArray5[randomIndex5];
    numbersArray5.splice(randomIndex5, 1)

    function outputNum(){
        output1.innerText = randomNumber1;
        output2.innerText = randomNumber2;
        output3.innerText = randomNumber3;
        output4.innerText = randomNumber4;
        output5.innerText = randomNumber5;
    }
    printNumbers(numbers.slice());
    setTimeout(outputNum, 800);
});


