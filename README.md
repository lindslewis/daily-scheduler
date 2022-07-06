# [daily-scheduler](https://lindslewis.github.io/daily-scheduler/)

## description
This page is supposed to be a daily schedule builder/calendar for the working day hours. Those hours typically run from 9 AM to 5 PM, so those are the hours chosen for the scheduler. 

![webpage-snip](https://user-images.githubusercontent.com/104105172/177484632-77ba7d4f-043c-4c04-b1ec-10e1dd8055e9.jpg)
![webpage-snip2](https://user-images.githubusercontent.com/104105172/177484635-7f4c7075-1a81-4cab-a047-de333e646120.jpg)

## table-of-contents

1. [usage](##usage)
2. [composition](##composition)
3. [lessons-learned](##lessons-learned)
4. [credits](##credits)

## usage
Users will see the current day and date at the top of their page above the grid where they have access to hourly blocks to post events. They can type in an event in the center column and then click the button at the end of the relevant row in order to save it to their calendar for the day. Then they can access it regularly, referring to the color coding in order to know what is currently happening, has already happened, and is going to happen later in their day. 

## composition
This project is composed of several parts. Initially, it was a project that was given starter code for the programmers. This code included some very base HTML with linked bootstrap and JQuery pages and a CSS page to create a general look for the page. It was up to the developer (me), to collect layouts from bootstrap for the grid, use the moment function for displaying the date at the top, and then various Jquery tags and functions in order to execute the code.

## lessons-learned
I really need to look further into my understanding of storage for my sites. This is an aspect of my webpages that I've continually struggled with since their introduction, and this project has really indicated to me that I need way more work in that space. With that struggle, I had a hard time moving on to linking my events together and adding in the color coordinated rows based on time, as it began to feel like I couldn't work on those aspects until I got my storage to work. I believe I need to work on my adaptability, and figuring out how to connect my elements even when they aren't fully functional yet. This way I do not waste time stressing over a part that can be pieced together later, once the other pieces have been set in place.

## credits

[Bootstrap](https://getbootstrap.com/docs/4.5/content/tables/): I used the bordered table for the timeblock portion of the page.

[JQuery](https://api.jquery.com/): JQuery was used in order to attempt to simplify the vanilla.

[Moment.js](https://momentjs.com/): Moment.js was used for the listed day with date at the top of the page, utilizing their formatting and standards.

[Stack Overflow](https://stackoverflow.com/questions/34832401/saving-user-input-in-jquery):While I commonly end up not parsing much information from Stack Overflow, I was able to gather some information regarding my data storage problems.


