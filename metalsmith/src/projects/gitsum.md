---
title: "GitSum: classroom git visualization"
tag: gitsum
image: gitsum.png
description: "A project to visualize and analyse the git activity of all students in a semester."
date: 2018-02-10
type: project
layout: project.html
---

## Goal
While there are no fixed assignments in my classes, most of their development work is done in git repositories. There are no specific criteria in about how many lines or how often a student ought to commit. However, an insight into how git is used during the semester in a group is telling about a student's performance or at least effort. In addition, by visualizing the git progress of all students in a class might help in creating a healthy competition.

The goal is to visualize certain git statistics for a classroom during the course of a semester.

## Methods and considerations
Luckily there already is a tool available that can generate nice statistics for student grading, namely [GitInspector](https://github.com/ejwa/gitinspector), originally developed to be used at Chalmers University of Technology and Gothenburg University, but more widely used today.

GitInspector is in essence a Python script that can clone a git repo, perform statistics and then output data into a variety of formats. In my case, I will output JSON so I can easily work with in on the front-end visualisation.

I want GitInspector to run on a server to allow teachers to easily refresh statistics on their classrooms with predefined git repos. I will combine it with a node server that will serve the front-end and a simple REST API.

I store the data in Google Cloud Firestore, because I wanted to experiment with it. In the end, I don't want to have any student related data stored off campus, so that will be only be during the test phase.

To host a Node server that can run Python scripts, I decided to create a Docker container that can easily be deployed on a school server. One big issue is that students will have their repos on a campus gitlab server that requires authentication.

To summarize, new for me are: using **Docker**, using **Google Cloud Firestore**, and **GitInspector**.

## Result
In progress.

## Reflection
