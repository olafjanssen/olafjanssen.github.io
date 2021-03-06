---
title: JavaScript Chain Reaction
tag: chainreaction
image: th_12.png
description: Creating a chain reaction (Rube Goldberg machine) animation on 20 laptops with JavaScript and a little help from Hydna is an easy and fun exercise to do with students learning JavaScript.
date: 2015-03-01
type: project
status: todo
layout: project.html
---

## Inspiration

At the start of the fourth semester for students on ICT & Media Design, we visited the ontdekfabriek in Eindhoven. As an inspirational exercise we created a Rube Goldberg machine or chain reaction from all kind of materials that could be found in a old derelict factory hall. The result was a poor man's version of the [music video](https://youtu.be/qybUFnY7Y8w) by *OK Go*.

At the end of the afternoon, while cleaning up our own mess, my colleague Chris and I looked at each other and thought: Why don't we do this in JavaScript? We didn't really know how it should work and what it should do, but then the [music video](https://vimeo.com/106547345) by *Brunettes Shoot Blondes* came to mind.

This was created by creating a video for all devices and then gathering a group of people to press play at the exact same moment. So the first question to my students was after showing this video: How would you create such a video as a Media Designer? The answers were pointing right to what we were hoping for:

* don't use videos, create a web animation using HTML5+JS+CSS
* create a small library to signal a device to start its own animation

In short, a JavaScript chain reaction!

<div class="embed-container">
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/95999935@N05/24101696738/" title="29643d57a2a2b7e31a345838a4ef5ebb-1024x768"><img src="https://farm5.staticflickr.com/4506/24101696738_a368a4c1f3.jpg" width="500" height="375" alt="29643d57a2a2b7e31a345838a4ef5ebb-1024x768"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script></div>

## The idea

How would that work? I assign to each student an id; just a number. This is his position in the chain. Every student uses his laptop or tablet and creates a small web project. They all include a small JavaScript library that does the hard work, namely listening to a signal from a server and sending a signal to a server to start the animation on the next laptop. All that is left for a student is to create a small application module that listens to the right id and then starts his animation. When his animation ends he should indicate to my chain reaction library that the animation should start on the next device.

So how about the server-side. At first, we started writing a minimal backend with PHP, storing current position in a text file. But then I thought it would be nice to use a service for this. I am eager to inspire students to use services more as I see too often that great plans are given up because they fear they can't build a service themselves.

I looked around for messaging services and I ended up at [hydna.com](https://hydna.com). They have a free plan that covers 30 concurrent devices per day and 100MB of traffic per month, which is quite enough for classroom use. The API of their JavaScrip library is super simple and it took me only a couple of minutes to get it working.

```javascript
var channel = new HydnaChannel('public.hydna.net', 'rw');
 
channel.onopen = function(event) {
// channel is open and ready to use
};
 
channel.onerror = function(event) {
// an error occured when connecting or opening the channel
};
 
channel.onmessage = function(event) {
// receiving a message from the channel
alert(event.data);
};
```
## The Result

Of course they have an interface for every platform and in any language you could wish for, but I’m sticking to JavaScript. So writing a small project as a template for the chain reaction is easy, see the code on [Github](https://github.com/olafjanssen/chain-js). Using that code and a bit of their own imagination, the students managed to get some kind of chain working. While the level of animation and imagination isn’t very professional, they learned about writing and using libraries for the first time and had to think of a nice animation within only a few hours. Here are the results, first my test at my office then the results by two classes.

<div class="embed-container"><iframe src="https://www.youtube.com/embed/mJ_mfetn0js" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://www.youtube.com/embed/vsYybeAHRM0" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://www.youtube.com/embed/oVZWig8rbSM" frameborder="0" allowfullscreen></iframe></div>

## Lessons learned

* Live testing the animation, while being connected to the messaging server leads to classroom mayhem.
* Writing your code in a modular way with a clear API prevents this mayhem as you can unit test the animation.
* Realising the chain can only work if everyone helps each other, peer reviewing code is needed, it is especially embarrassing if your animation does not start, while the person before you messed up.
* Remembering where in the chain you are  (number < 20) is still a difficult task.