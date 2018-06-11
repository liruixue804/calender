# calender
This puzzle is a calendar rendering problem. The input is a list of events and the output is a calendar display similar to Outlook, Google Calendar, etc. 

Part I: Write a function ( JS) to lay out a series of events on the calendar for a single day.

Events will be placed in a container. The top of the container represents 9am and the bottom represents 9pm. The width of the container will be 620px (10px padding on the left and right) and the height will be 720px (1 pixel for every minute between 9am and 9pm). The objects should be laid out so that they do not visually overlap. If there is only one event at a given time slot, its width should be 600px.

There are 2 major constraints: 
-Every colliding event must be the same width as every other event that it collides width. 
-An event should use the maximum width possible while still adhering to the first constraint.


The input to the function will be an array of event objects with the start and end times of the event. Example (JS):

[

 {id : 1, start : 60, end : 120},  // an event from 10am to 11am
 {id : 2, start : 100, end : 240}, // an event from 10:40am to 1pm
 {id : 3, start : 700, end : 720} // an event from 8:40pm to 9pm 
]

The function should return an array of event objects that have the left and top positions set (relative to the top left of the container), in addition to the id, start, and end time.

Part II: Use the function from Part I to create a web page .
