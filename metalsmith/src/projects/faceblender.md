---
title: FaceBlender
tag: faceblender
image: faceblender.png
description: "First attempt to blend faces into one in search for absolute beauty, coded from scratch. Main result at the time: all blends lead to Britney Spears lookalikes."
date: 2000-07-01
type: project
layout: project.html
---

## Idea
A theory states how the human brain defines beauty. It holds a template face which is the average of all the faces one sees. This is then compared to any other face, the prettiest ones being those that resemble the average the most. This explains why every person has his own definition of beauty, but it also explains why some features are thought of as beautiful by most people. What this also means is that people with symmetric faces are the most attractive. Using FaceBlender portraits are automatically transformed and blended into an average picture. In addition, a Self-Organizing Map is produced, revealing the different types of faces hidden in the input data.

## Features
* C++ Project, with OpenGL Framework
* Linear Algebra Coordinate Transformations
* Backward and Forward Projection
* Database of 170 faces
* Kohonen Self-Organizing Map

## Results
The poster below shows all that I have left of the original project. Sadly, I lost the code on a hard drive gone missing. It shows the mix of the mouth-closed subset of the 170 pictures and part of the Kohonen map going from brunettes in one corner to light blonde in the other.

This version does not contain any face recognition, I had to manually tag the eye and mouth positions in all photos, also I cleaned up the background so that it would average to a black color. An interesting result that I remembered is that the final result did not really change after 70 or so images, and that any random set of 70 pictures of the set of 170 gave pretty much the same result, which more or less resembled Britney Spears at the time.

<div class="embed-container embed-image">
<a href="/img/projects/faceblender-original-poster.png" target="blank"><img src="/img/projects/faceblender-original-poster.png"></a>
</div>
