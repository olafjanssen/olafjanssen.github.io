---
title: "CheckerList: A dynamic Deezer playlist"
tag: deezerlist
image: deezlist.png
description: Playlists should be dynamic, created on the spur of the moment, based on a mix of artists, albums and tracks that you choose.
date: 2018-03-13
type: project
layout: project.html
---

# Background
I am a fond member of [Deezer](https://www.deezer.com), an online music streaming service, for several years now. It embodies the idea that music is something to be consumed and not something to be owned. However, after having used it for a long time now, a few things start to annoy me.

The Flow mode, that is supposed to suggest new and exciting music for you to explore, turns out to be more like that radio station that tries to push same 20 crappy songs every hour of the day. And even if they are songs I like, I start to dislike them more and more and wonder more and more what other music there is. Why don't I get other tracks from the artists I favorite, but only the same few? 

Also, playlists, really? Maybe people like to make playlists. Maybe they have their fixed 'dinner time', 'unwind time', 'Friday night with the guys', 'Sunday afternoon with Whiskey and dog next to the fireplace' moments that they can fix in static isolated playslists, but I am not such a person. I want dynamic flexible playlists.

# The Idea
I am happy that Deezer has a very open API with clear examples to get started. My idea is to create my own player based on the preferences I have indicated on the main Deezer site and the whole music database.

* Create dynamic playlists based on real-time selected favorite artists, albums and tracks.
* Make sure to hear all music of an artist, not just the few top songs and such that you don't hear the same songs over and over again.
* Allow to blacklist the tracks that I don't need to hear. 
* A flow that really explores new music.

You can find the latest version here: [deezlist](http://smoishele.com/deezlist/).

# First prototype
For the first prototype, I have the following goals:
* Allow a user to log into Deezer (sadly necessary)
* Allow the user the select his favorite artists, album and tracks and create a dynamic playlist.
* The playlist contains then all albums from the selected artist, all tracks from selected favorite albums and your favorite tracks.

![deezlist-prototype1](/img/projects/deezlist/prototype1.png)

Issues I still have:
* Well, the design is a mess.
* I cannot get the player to work yet on a mobile browswer. And I am not sure if there is supposed to be a 30 second limit or not.

# Plan for next protoype
For the next prototype:
 * Settings: select all favorites
 * Settings: weight the randomization such that an artist with 10x more songs does not get 10x more play time
 * Dynamic playlist creation, changing the selection should immediately update the generated playlist.
 * Create a blacklist of tracks (and perhaps albums) that won't get played (even if they belong to your favorite artist).
 