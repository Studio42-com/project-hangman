## Chris Pickett Presents:
#    A Childhood Word & Guessing Game Sanitized for the Modern times.
    (also known as Hangman or Spaceman)

With beginner JavaScript skills, the recommendation was to select one of the easier game choices from the list provided. Fortunately, I had already chosen to do "Hangman", which turned out to be one of the available choices. The mistake I made was assuming this would be a relatively easy task. For me, this was a very difficult task due to my lack of knowledge and long-term practice with JavaScript. Coupled with this was the additional issue of my pre-scheduled vacation occuring during some of the same time as this project was assigned. I spent 3 whole days of my vacation in class and getting assistance as needed. Environmental issues prevented some progress. The other issue was a sense of being overwhelmed by the fact that this was not going to be easy or simple.

They key to getting this under control was to literally stop and make a list of small elements to address. The list was made with the idea that the list may need further revision. Once things were divided into small and very specific tasks, it was important to then address each small task. One small task would be critical to one or 2 other components. This small indivdual successes were able to combine into larger successes. The project actually came together rather quickly when I stop to consider the actual time in front of a computer creating code. A lot of time was spent not coding and just organizing. These efforts can sometimes be equally or more important, especially at the beginning.

My approach was to provide a very minimal presentation, devoid of graphics. The instructor provided graphics, which I downloaded a copy of for "just in case" purposes. Fortunately, I became unsatisfied with an absolute minimal presentation and was actually able to get the graphics working without much assistance.

Another issue was "why did this work in my test environment and not in production". Asking for help showed where the issue was. This shows the value of having an additional set of eyes, especially a more experienced set of eyes, helping to spot areas of concern. Just because your terminal is saying "no problems" doesn't mean that's necessarily true.

Onto the game:
The game is presented in a minimalistic layout that also supports graphics. The database can be extended to handle much larger numbers of entries. I'm currently only using a relatively small number of entries to support proof of concept and functionality. No additional changes need to be made to the javascript file. Additionally, the database could be made into a sepparate .js file, which could be called from the index.html.

https://studio42-com.github.io/project-hangman/

The majority of words chosen were either elements from professional audio, IT and skill toys. Skill toys includes both the names of types of skill toys as well as names of specific models of yoyos. This may mean some words will be nearly impossible to guess correctly unless you're "on the inside".

Load-up the page and click "Let's Go" and you're ready to begin.

![Let's get started](
https://github.com/Studio42-com/project-hangman/blob/gh-pages/first.png)

As we can see, the presentation is very simple and minimal.
"Get Started" and "Restart" use the same function to begin gameplay.

![Begin Game Play](
https://github.com/Studio42-com/project-hangman/blob/gh-pages/begin.png)

Rather than begin with a blank page, I chose to start with a rocket just to be more visually interesting.

![Winning](
https://github.com/Studio42-com/project-hangman/blob/gh-pages/win.png)

Upon winning, the rocket engine ignites and win-type messages are displayed.

![Unsuccessful](
https://github.com/Studio42-com/project-hangman/blob/gh-pages/lose.png)

Of course, not everyone can win, and sorry, there's no participation trophies here. This is the "I have failed to achieve the desired objective" screen, also known as the "lose result".

If "cheating" is your thing, then by all means, go to the console in Chrome and type in "randomArray" and it will show you the array used for solving the randomly chosen word.

![cheating!](
https://github.com/Studio42-com/project-hangman/blob/gh-pages/cheat.png)



The technologies used were HTML, CSS and JavaScript. Additional sofware such as Photoshop, was used for editing additional assets for inclusion. For example, the spaceman photos were converted from .jpg to .png to facilitate invisible background for a better appearance.

Future ideas would likely include:
- Animations to the "inspirational messages" area.
- Inclusion of sounds for key elements.
- Better use of CSS and a better color scheme
- A background that represents the theme, which may also be extended to include new graphics
- Altering the number of bad guesses.
