// Show Date & Time Button
function showDateAndTime(){
    document.getElementById('date').innerHTML = Date();
    document.getElementById('date').style.display = "block";
};

// Hide Date & Time Button
function hideDateAndTime(){
    document.getElementById('date').style.display = "none";
};

// Text Change Buttong
function textChange(){
    document.getElementById('textChange').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cumque!";
};

// Alert Button
function alertWindow() {
    alert("Shikbe Shobai Banani Batch-334");
};

// Font Size Increase
function fontSizeIncrease(){
    document.getElementById('font-size').style.fontSize = "30px";
};

// Color Change Button
function colorChange(){
    document.getElementById('colorChange').style.backgroundColor = "black"
};

// For Equation
document.getElementById('firstSum').innerHTML = 5 + 9;
document.getElementById('secondSum').innerHTML = 100 / 5;
document.getElementById('thirdSum').innerHTML = 55 * 10;

// For document.write
function documentWrite(){
    document.write("JavaScript Home Work")
};

// For Console Log
function consoleLog(){
    console.log("Console Log Active");
    console.log(4 + 4 - 4 / 5 * 8);  
};

// For Print Full Screen Window Button
function printWindow(){
    window.print()
};

// For Start Gif Image
function onGif(){
    document.getElementById('danceGif').src = 'images/dance.gif';
};

// For Stop Gif Image
function offGif(){
    document.getElementById('danceGif').src = 'images/dance.png';
};

// Variable
var firstName = "Sudipta";
var lastName = "Mrong";

document.getElementById('var').innerHTML = ("My Name is ") + firstName + ' ' + lastName;

// toLowerCase toUpperCase
var fName = 'Sudipta';
var lName = 'Mrong';

document.getElementById('lowUp').innerHTML = fName.toUpperCase() + ' ' + lName.toLowerCase();

// Constant
const age = 39;

document.getElementById('const').innerHTML = age;

// Substring
var fullName = 'Sudipta Mrong';

document.getElementById('substring').innerHTML = fullName.substring(0, 5);

// Length
document.getElementById('lenght').innerHTML = fullName.length;

// Split
document.getElementById('split').innerHTML = fullName.split('');

// Prompt
// let Name = prompt('What is your full name?');

// document.getElementById('prompt').innerHTML = '(Prompt)' + (' ') + 'My name is ' + Name;

// Single & Double Quotation
var singleQuotation = "My Name is 'Sudipta'";
var doubleeQuotation = 'My Name is "Sudipta"';

document.getElementById('quotation').innerHTML = singleQuotation + (' and ') + doubleeQuotation;

// Conditional testing true or false
var firstNumber = 8;
var secondNumber = 9;

document.getElementById('conditional').innerHTML = (firstNumber == secondNumber);

// Array
var phone = ['IPhone', ' Oneplus', ' Nokia'];
phone[3] = ' Samsung';

document.getElementById('array').innerHTML = phone;

// Object
var laptop = {
    name: 'HP',
    model: 'Probook',
    storage: '120gb SSD',
};

laptop.storage = '256GB SSD';

document.getElementById('object').innerHTML = laptop.name + ' ' + laptop.model + ' ' + laptop.storage;

// JS Precedence
var fatherBirth = 1970;
var sonBirth = 1995;
var motherAge = 35;

var averageMotherAge = sonBirth - fatherBirth > motherAge;
var averageMotherAge = (fatherBirth + sonBirth) / 2;

document.getElementById('precedence').innerHTML = averageMotherAge;

// Mouse Hover
function mouseHover(){
    document.getElementById('mousehover').src = 'https://images.pexels.com/photos/5615/vintage-shoes-old-boots.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500';
};

// Double Click
function doubleClick(){
    document.getElementById('dblclick').innerHTML = "Hi! Double click properly work";
};

// Toggle Click
function clickToggle(){
    var x = document.getElementById('toggle');
    if (x.innerHTML === "Hello!") {
        x.innerHTML = "Hello! Sudipto";
    } else {
        x.innerHTML = "Hello!";
    }
};

// Repeat
let time = '9:00AM ';
document.getElementById('repeat').innerHTML = time.repeat(4);

// Function for calculation and return
var x = myCalReturn(4, 3);
document.getElementById('calReturn').innerHTML = x;

function myCalReturn(a, b){
    return a * b;
};

// Convert from Fahrenheit to Celsius
function toCelsius(f){
    return (5 / 9) * (f - 32);
};

document.getElementById('fToCelsius').innerHTML = "The Temperature is " + toCelsius(77) + " Celsius";

// Onkeypress    
function keyPress(){
    document.getElementById('keyPress').innerHTML= "Welcome!";
};

// OnkeyDown
function keyDown(){
    document.getElementById('keyDown').innerHTML= "Welcome!";
};

// Onkeyup
function keyUp(){
    document.getElementById('keyUp').innerHTML= "Welcome!";
};

// String and Object
let xx = "Sudipta" // x is a string
let yy = new String("Sudipta") // y is a object

document.getElementById('stirngObject').innerHTML = typeof xx + "<br>" + typeof yy;

// For slice() method
let employeeNames = "Sudipta, Mrong, Sengku";

document.getElementById('slice').innerHTML = employeeNames.slice(16, 22);

// For substr() method
let jobName = "Jr. Officer, Hr. Officer, CEO";

document.getElementById('substr').innerHTML = jobName.substr(13, 11);

// Replacing String Content
function textReplace(){
    let textReplace = document.getElementById('replace').innerHTML;
    document.getElementById('replace').innerHTML = textReplace.replace("Windows 10", "IOS")
};

// Concat()
let formula = "My" .concat(" ", "Name");
document.getElementById('concat').innerHTML = formula;

// Trim() for remove whitespace
function trim(){
    let formula1 = "       My Name is SRK                  ";
    document.getElementById('trim').innerHTML = formula1.trim();
};

// padStart and padEnd
let formula2 = "10"

document.getElementById('padStart').innerHTML = formula2.padStart(9, 0);
document.getElementById('padEnd').innerHTML = formula2.padEnd(7, .113);

// CharAt and CharCodeAt
let formula3 = "Sudipta"

document.getElementById('charAt').innerHTML = formula3.charAt(3);
document.getElementById('charCodeAt').innerHTML = formula3.charCodeAt(3);

// Property access [ ] on strings<
document.getElementById('pAcess').innerHTML = formula3[5];

// split()
let formula4 = "Sudipat,Mrong,Sengku";
const formula5 = formula4.split(",");

document.getElementById('Split').innerHTML = formula5[2];


