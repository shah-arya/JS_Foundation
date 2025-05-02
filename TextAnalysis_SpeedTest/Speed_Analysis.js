let testText = "Every thought has some thought that no one thought, but I thought when someone taught that thought.";
let startTime, endTime;

// start test function
function startTest(){
    // set the test text
    document.getElementById("inputText").value = testText;

    // reset the results and timer
    document.getElementById("output").innerHTML = "";

    startTime = new Date().getTime();

    const userInputEl = document.getElementById("userInput");
    userInputEl.value = "";
    userInputEl.readOnly = false;

    userInputEl.focus();

    // change button text and functionality
    // var button = document.getElementById('btn');
    // button.innerHTML = "End Test";
    // button.onclick = endTest;
}

// end test function - ends the test and display the results
function endTest(){
    endTime = new Date().getTime();

    // disable user input
    document.getElementById("userInput").readOnly = true;

    // calculate time elapsed and words per minute
    var timeElapsed = (endTime - startTime) / 1000; // seconds
    var userTypedText = document.getElementById("userInput").value;
    var totalLength = userTypedText.length;

    // split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== "";
    }).length;

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed)*60);
    }

    // display results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing test Results:</h2>" +
        "<p>Total Length: " + totalLength + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words per Minute (WPM): " + wpm + "</p>";

    // reset the button
    // var button = document.getElementById("btn");
    // button.innerHTML = "Start Test";
    // button.onclick = startTest;
}
