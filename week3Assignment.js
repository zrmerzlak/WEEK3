// Week 3 Coding Assignment
// Zachary Merzlak

// Question 1: Create array named ages
let ages =[3, 9, 23, 64, 2, 8, 28, 93]; 

//Part A: Creating a function to perform the task of subtracting 
//the first element from the last element in an array 
function partA(array){ 
    lastAge=(array.length)-1;
  console.log(array[lastAge] - array[0]);
}

// Running the function to perform on the array 'ages'
partA(ages);

// Part B: Adding another element to the array 'ages'
ages.push(77);

// Running the function again to prove it works on arrays of different lengths
partA(ages);

// Part C: creating a loop to iterate through the array 
// and calculate the average age. 
aveAge = ages.reduce((acc,currentValue) => acc + currentValue) / ages.length;

// 'acc' is the accruing total, the reduce function runs through each element of the array,
// after the arrow is the action the function is performing (summing). After the sum is calculated
// divide by the length of the array to calculate the mean.

// Print the mean to the console.
console.log(aveAge);




// Question 2: Create array named names
let names=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Part A: create loop that finds the average number of characters for each name

// Attempt 1, doesnt work like this
// aveLength= names.reduce((acc,currentValue) => acc + currentValue.length) / names.length;

// Attempt 2: Doesn't work because (array[i].length) is improper syntax
// function nameLength(array){                    -Create function
//     let sum=0;                                 -Declare sum var
//     let aveLength=0;                           -Declare aveLength var
//     for(let i=0; i<= array.length; i++){       -For loop that runs through each element
//         sum=sum+array[i].length;               -Take the running sum and add the length of each element to it
//     }
//     aveLength=sum / array.length;              -Find mean
//     console.log(aveLength);                    -print mean
// }
// nameLength(names);                             -Run function on names

// ATTEMPT 3: THIS WORKS. However, i tried rewriting it in attempt 4 and got it down to 1 line with less vars
// nameLength = names.map(n=>n.length); -creates new array of lengths of each element
// aveNameLength = nameLength.reduce((acc,currentValue) => acc + currentValue) / names.length; -creates mean of new array
// console.log(aveNameLength);

// ATTEMPT 4: This is works the same as above but so much shorter!
console.log(names.map(n=>n.length).reduce((acc,currentValue) => acc + currentValue) / names.length);

// Part B: create a loop that concatenates each name with a space inbetween
// Join method does just that, adding a space in between quotes adds a space between elements
console.log(names.join(' '));

// Question 3: How to access the last element in an array
console.log(names[names.length-1]);

// Question 4: How to access the first element in an array
console.log(names[0]);

// Question 5: Create namesLength array by looping throguh names array
namesLength = names.map(n => n.length); 

// Question 6: Use a loop to iterate through namesLength to find the sum
sumNamesLength = namesLength.reduce((acc,currentValue) => acc + currentValue);
console.log(sumNamesLength);

// Question 7: Write function that takes 'word' and 'n' and repeats word n times
function wordN(word, n){
    let wordArray=[];                   //Declare array to put word into
    for(let i=0; i<n; i++){             //Create loop to iterate n times
        wordArray.push(word);           //Push word into declared array
    }
    console.log(wordArray.join(''));    //Print the array concatenated together
}
var test='Banana';
wordN(test,7);

// Question 8: Write a function that takes two paramaters and returns them concatenated with a space
function spaceWord(first, last){
    console.log(first + " " + last);
}
firstName='Zach';
lastName='Merzlak';
spaceWord(firstName,lastName);

// Question 9: Write a function that returns 'true' if sum of array is greater than 100
function over100(array){
    let sum = array.reduce((acc,currentValue) => acc + currentValue);
    if(sum<=100){
        console.log("False");
    }else{
        console.log('True');
    }
    
}
testArray1=[10, 10, 10, 71]; //sum is 101
over100(testArray1); // should return true

testArray2=[10, 7, 14, 2, 6]; //sum is 39
over100(testArray2);        // should return false

testArray3=[10, 10, 10, 70]; //sum is 100
over100(testArray3);        //should return false

// Question 10: Write a function that returns the average of all the elements in array
function findAve(array){
    console.log(array.reduce((acc,currentValue) => acc + currentValue) / array.length);
}

findAve(testArray3); //Should return 25 

// Question 11: Write a function that returns true if the ave of first array is greater than second array
function greaterAve(array, secondArray){
    arrayAve=array.reduce((acc,cV) => acc+cV)/array.length;
    secondArrayAve=secondArray.reduce((acc,cV) => acc+cV)/secondArray.length;
    console.log(arrayAve>secondArrayAve);
}

greaterAve(testArray3, testArray2);
greaterAve(testArray2, testArray1);

// Question 12: Write a function that determines if you will buy a drink based on if it is hot and how much money you have
function willBuyDrink(hot, cash){
    if(hot==true && cash>10.50){
        console.log('True');
    }else if(hot==true && cash<=10.50){
        console.log('Too broke');
    }else{
        console.log('Too cold');
    }
}
isHotOutside=true;
moneyInPocket=10.50;

willBuyDrink(isHotOutside, moneyInPocket);

// Create a function that solves a problem:
// Hank is my dog. This function takes no parameters, but runs through a series of questions to 
// find out if Hank is hungry. What the user inputs decides where the line of questioning is going.
// Admittedly, not a hard problem to solve as he is always hungry, but I wanted to see if I could make 
// a function that worked off of user input.

function hungryHank(){
    var enterQuestion=prompt('Want to find out if Hank is hungry!? y or n');
    if(enterQuestion=='y'){
    var eat = prompt('Did he eat yet, y or n');
    }else{
        alert('Spoiler, Hank is hungry. Have a great day mate!');
    return;
    }
    if(eat=='y'){
        alert('Doesnt matter bro, he is always hungry.');
        return;
    }else{
        var alive = prompt('Is he alive? y or n');
    }
        if(alive=='y'){
            var sky=prompt('Great! Now is the sky blue? y or n')
        }else{
            alert("RIP Hank.. I'm sure hes hungry in spirit")
            return;
        }
            if(sky=='y'){
                alert('Of course it is, and of course Hank is hungry.');
            }else{
                alert('You are a liar. And Hank doesnt like liars. Good day.');
            }

}

hungryHank();
