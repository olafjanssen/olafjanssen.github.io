---
title: Mapshape Traveller
tag: mapshape
image: mapshape.png
description: Creating routes on a map, trying to fit the route best to a geometrical shape such as circling a church or going around in a pentagram around Rennes-Le-Châteaux. It is a web-based tool using the Google Maps API.
date: 2015-05-21
type: project
status: todo
layout: project.html
---

## Inspiration
While visiting the Van Abbe museum in museum I was triggered by an artwork showing a map of the south of the Netherlands and a highlighted route in the shape of an almost perfect circle. Sadly, I can't put the picture here for reference. The piece was made before the computer era. Nowadays, it should be quite easy to automate this task. And that is what this is about.

## Implementation
* Create functions to break up simple shapes into paths and segments of arbitrary length, so that we can feed points on the path to an API for computing a route that stays close to the chosen shape.
* Compute the locations of these points on map coordinates, we can use an internal function of Google Maps: `google.maps.geometry.spherical.computeOffset` to go from one lat/long coordinate to the next by ofssetting it by some distance.
* Now we can combine many calls to the Google Directions Service to stitch together different routes with begin and endpoints on the indicated shape. Note that I could only use about 10 waypoints per route so that the entire route around a shape can be comprised of many Directions calls.
* By playing with the minimal and maximal segment length, location, and shapes we can play around with getting better or worse fits of the route to the shape.
* Then we render the result on a Google Maps.

## A few examples

The experiment has no user-friendly interface or an online demo, so I can only show some of the results. One is a circle close to Eindhoven, then a pentagram in the South of France, and a smaller pentagram that some people might recognize as the Lincoln pentagram of Rennes-le-Châteaux. Because the final pentragram is small (radius of about 3.5km) and there are only few roads in the mountaineous area, the fit in thist last image is very poor.

<div class="embed-container">
        <iframe style="position: relative; top: 0; left: 0; width: 100%; height: 100%;" src="https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=72157688342239613&sort=2&by=album&theme=slider&scale=fit&limit=100&skin=default-light&autoplay=false" scrolling="no" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    </div><small><a target="_blank" href="https://www.flickr.com/photos/95999935@N05/albums/72157688342239613">Flickr album</a></small>

## What's would be next
The goal of what I wanted to reach was that you could use SVGs and to have a simple user interface so you could play around with it. Maybe some day.

In the future, I could maybe use an algorithm to find a best fit on earth using some machine learning algorithm.