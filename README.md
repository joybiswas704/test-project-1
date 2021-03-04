# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Joy Biswas**

Time spent: **3.5** hours spent in total

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/3PeuE0h.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I have used w3 school's documentation for setInterval and clearInterval function]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I have encountered one challenge while improving the functionality of the game. It was when i tried to implement timing/count down for the game. It took me some time to figure out when to start the count down and when to stop it. I have got a hint from the specification file to use setInterval and clearInterval so i had to look up these functions and use callback function that would decrement the timeLimit every 1000ms. Finally i was able to implement it right way and use DOM to render it on the screen. I also added a red color to the counter as soon as it reaches 6000ms or less.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[So far i don't have any specific question but i'm sure i will have many as soon as i start learning more of the web development.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would do more testing and see if there is any exception handling that might require. I would also make the code more readable by adding comments and refactoring and instead of hard coding i would try to come up with a dynamic solution. I have repeacted codes in some fuction and i would have avoided this 'DRY' method and maybe introduce more function for reusability. I would add levels in this game so that each level the number of the buttons would increase each time and add a option to increase dificulty by the user and it would basically decrease the clueHoldTime.]



## License

    Copyright [Joy Biswas]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
