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
    document.getElementById('danceGif').src = '../images/dance.gif';
};

// For Stop Gif Image
function offGif(){
    document.getElementById('danceGif').src = '../images/dance.png';
};