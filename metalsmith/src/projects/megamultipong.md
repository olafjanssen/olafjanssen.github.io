---
title: Mega Multi Pong
tag: megamultipong
image: th_9.png
description: Mega Multi Pong (MMP) is multi-device, multi-ball and multi-player with multi-bit audio! MMP is created about 42 years before the original Pong was released in 1972 and MMP is therefore THE answer to the ultimate question about life, the universe and everything.
date: 2017-04-05
start-date: 2015-03-25
type: project
status: todo
layout: project.html
---

I was inspired to create a new Pong version by my project about creating a [JavaScript Chain Reaction](/projects/chainreaction). Here, an interactive story across multiple devices is started by a ball that moves from one screen into the next. If interactivity is the next step, then Pong is a logical way of going about it.

First, I adapted the code so it would allow the simple Pong game dynamics, so I could test it out at home:  

<div class="embed-container"><iframe src="https://www.youtube.com/embed/bjaIaLDXtmQ" frameborder="0" gesture="media" allowfullscreen></iframe></div>

## First Championship

Next, a colleague of mine announced the "IMD Open Championship for MEGA MULTI PONG" for the week thereafter. This put a deadline on my little pet project to add some fun stuff and make it user-friendly enough for the general audience to be able to use it. This is how it panned out.

<div class="embed-container"><iframe src="https://www.youtube.com/embed/HO5JPyiXdx0" frameborder="0" allowfullscreen></iframe></div>

After playing Mega Multi Pong with 46 teachers and students, I realized that the best fun of multiplayer games is when eventually everything goes wrong. Well I succeeded. Testing it on 5 devices on my own with a proper WiFi network is very different from playing it with almost 50 people with all sorts of devices on a overloaded network, trying to cheat and hack their way around the game.

A few issues that popped up:
* there are no channels for games, so only one game is possible at the same time
* there is no overview of the game
* people need to enter their position in the queue which is tedious and error prone
* the data transfer footprint is too large for such a simple game
 
The code is on [Github](https://github.com/olafjanssen/megamultipong).

## Update

A second attempt for playing MMP on a massive scale was two years layer in April 2017. At Erhvervsakademi Dania - Skive, Danish game design students tried to play the game. I made a few improvements, but not many, to the old code so that it would be slightly easier to create a queue. Also the most blatant bugs were removed.

<div class="embed-container"><iframe src="https://www.youtube.com/embed/U65SZqjChrI" frameborder="0" gesture="media" allowfullscreen></iframe></div>

It still ended up as chaos (mission accomplished). In this case it became clear that students have notoriously bad batteries in their laptops, players dropping out will cut off the device chain, making the game unwinnable.

## Future

The idea is still cool, I think. To make it a bit more professional and change the goal of the project from creating chaos to a more pleasurable gaming experience, a channel system should be introduced so that multiple games can be played at the same time (using the same website), and changing the communication between devices to something more specialized to multiplayer games instead of the broadcasting channel system used now.
