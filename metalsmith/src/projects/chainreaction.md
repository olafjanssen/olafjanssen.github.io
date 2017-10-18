---
title: JavaScript Chain Reaction
tag: chainreaction
image: th_12.png
description: Creating a chain reaction (Rube Goldberg machine) animation on 20 laptops with JavaScript and a little help from Hydna is an easy and fun exercise to do with students learning JavaScript.
date: 2015-03-01
type: project
layout: project.html
---

At the start of the fourth semester for students on ICT & Media Design, we visited the ontdekfabriek in Eindhoven. As an inspirational exercise we created a Rube Goldberg machine or chain reaction from all kind of materials that could be found in a old derelict factory hall. The result was a poor manâ€™s version of the following music video by OK Go.

At the end of the afternoon, while cleaning up our own mess, my colleague Chris and I looked at each other and thought: Why donâ€™t we do this in JavaScript? We didnâ€™t really know how it should work and what it should do, but then the following music video by Brunettes Shoot Blondes came to mind:

This was created by creating a video for all devices and then gathering a group of people to press play at the exact same moment. So the first question to my students was after showing this video: How would you create such a video as a Media Designer? The answers were pointing right to what we were hoping for:

* donâ€™t use videos, create a web animation using HTML5+JS+CSS
* create a small library to signal a device to start its own animation

In short, a JavaScript chain reaction!

How would that work? I assign to each student an id; just a number. This is his position in the chain. Every student uses his laptop or tablet and creates a small web project. They all include a small JavaScript library that does the hard work, namely listening to a signal from a server and sending a signal to a server to start the animation on the next laptop. All that is left for a student is to create a small application module that listens to the right id and then starts his animation. When his animation ends he should indicate to my chain reaction library that the animation should start on the next device.

So how about the server-side. At first, we started writing a minimal backend with PHP, storing current position in a text file. But then I thought it would be nice to use a service for this. I am eager to inspire students to use services more as I see too often that great plans are given up because they fear they canâ€™t build a service themselves.

I looked around for messaging services and I ended up at hydna.com. They have a free plan that covers 30 concurrent devices per day and 100MB of traffic per month, which is quite enough for classroom use. The API of their JavaScrip library is super simple and it took me only a couple of minutes to get it working.
