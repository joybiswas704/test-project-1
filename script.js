
// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1200; //how long to hold each clue's light/sound
var pattern = [];
var randNumber = 0;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;
var strikeLeftOver = 3;
var timeLimit = 10000;
var timing = 0;


function randomPatternGenerator() {
  pattern = []; // resetting the pattern
  for(let i = 0; i < 7; i++) {
    randNumber = Math.floor(Math.random() * 6) + 1; // generate a number between 1 and 6
    pattern.push(randNumber);
  }
}

function countDown() {
  if(timeLimit < 0) {   // countdown to 0
    stopGame();
    alert("Time out. You have lost the game.");
  }
  else if(timeLimit < 6000) {  // when countdown reaches 5 sec
    document.getElementById("timer").classList.add("danger"); // changes color to red
  }
  else {
    document.getElementById("timer").classList.remove("danger");
  }
  document.getElementById("timer").innerHTML = `${timeLimit/1000} seconds remaining.`;
  timeLimit -= 1000;
}


function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  timeLimit = 10000;
  strikeLeftOver = 3;
  randomPatternGenerator();
  clearInterval(timing);
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("tryout").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  document.getElementById("tryout").innerHTML = `Strike left: ${strikeLeftOver}`;
  document.getElementById("timer").innerHTML = ``;
  playClueSequence();
}

function stopGame(){
  clearInterval(timing);
  document.getElementById("timer").classList.add("hidden");
  document.getElementById("tryout").classList.add("hidden");
  
  progress = 0;
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 512,
  6: 588
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clearInterval(timing);
  guessCounter = 0;
  timeLimit = 10000;
  timing = setInterval(countDown, 1000);
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime = clueHoldTime - 20; // each iteration the clue playback time will speed up by 25 ms
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  clearInterval(timing);
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    if(mistakes > 1) {
      //GAME OVER: LOSE!
      loseGame();
    }
    else {
      mistakes += 1;
      strikeLeftOver -= 1;
      document.getElementById("tryout").innerHTML = `Strike left: ${strikeLeftOver}`;
      playClueSequence();
    }
    
  }
}

