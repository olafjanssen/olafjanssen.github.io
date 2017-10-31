---
title: "Blind Typing Glove: NoReMorse"
tag: typingglove
image: th_1.png
description: Typing in the dark without visual feedback. I created my own conductive glove hooked up to an Arduino. A system based on Morse code to enter text with the least amount of accidental errors.
date: 2017-02-01
type: project
layout: project.html
---

Often I am in bed and the ideas and thoughts start flowing. My eyes are closed, I'd rather not open my eyes, I'd rather not wake up my wife with the light from my phone, I'd rather not end my train of thought which only keeps going when I am relaxed in bed with my eyes closed.

Basically, I want to type while lying in this position in the middle of the night. What I often was doing at night was tapping my fingers, so that was my starting point.  At the time, I was playing around a bit with the Arduino so I decided to create the following solution, fully aware that it will probably not be a solution to my original problem.

A stand-alone glove that translates a finger tapping sequence into text that is stored in the glove and can later be send for further editing. I use capacitive wires to create a sort of [Makey Makey for Arduino](https://github.com/BhavyaShukla/Makey-makey-using-arduino-uno-r3-Multiple-inputs-), where I can read out a signal if two fingers close a circuit.

I decided to start with a standard Morse-code based scheme, but instead of long and short pulses, I mapped the short pulse to the index finger and the long pulse to the middle finger. The thumb being the base finger to tap. In my first version, the ring finger would be a word boundary (space), and the pinky finger would activate or deactivate typing mode so that accidental taps don't always get registered. Using a simple LED, I can give feedback on the state of the glove, so the user knows if he can type and whether his touches register.

In the end, I decided to use only the index and middle finger, mapping a short tap of both fingers to a word boundary and a long two-finger tap to switching the listening state. I did not want to include timing anywhere, because I know I would never be as proficient in Morse typing as a professional and thinking time should not translate into different characters. If I lose in my head where I am in my word or letter, I can simply add a word boundary and try again in the next word. Of course an editing phase would always be required, this glove would simply record raw ideas and thoughts so I would not lose them.
 
To store data I added an SD card reader to the Arduino board. I decided that a 16GB card would probably be enough for most of my nighttime thoughts. The code for the glove is simply C code for the Arduino board and mostly consists of a state machine that keeps track of where in the process the user is: within typing a character, on or off state or between touches.

These images show the glove during different phases of the design process:

<div class="embed-container">
        <iframe style="position: relative; top: 0; left: 0; width: 100%; height: 100%;" src="https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=72157688598860714&sort=2&by=album&theme=slider&scale=fit&limit=100&skin=default-light&autoplay=false" scrolling="no" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    </div><small><a target="_blank" href="https://www.flickr.com/photos/95999935@N05/albums/72157688598860714">Flickr album</a></small>

## Afterthoughts
The glove worked reasonably well. The touches registered consistently and I hardly had false positive or negative touches. Of course, the experience of wearing a warm glove (one size too small) in bed wired to a wall socket (my Arduino was not hooked up to a battery), was suboptimal. But it works, and I learned Morse code. (Which I will by now have forgotten again.)
