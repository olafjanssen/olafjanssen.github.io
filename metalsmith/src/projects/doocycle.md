---
title: "DooCycle: A To Do app ahead of its time"
tag: doocycle
image: doocycle.png
description: It is not about what you are about To Do, but what you have done and what fun stuff to do next.
date: 2018-03-13
type: project
layout: project.html
---

# Background
I hate To Do lists. With a vengeance. I make them, I break them. Some time ago, I already wrote a [rant on To Do lists](/projects/todohate) or apps and created a small script that would fill my calendar with gentle reminders. What still bothers me are those chores that pop up more or less regularly, but not regular enough to be part of my daily routine. Laundry of instance; some weeks I don't do any, then I do 3 washes in a day, or spread out over the week. Clipping my nails is not a thing I do at a particular day, but more or less once a week or.. I don't know actually. And when was the last time I tidies the attic? Would it be about time to do it now?

# The Idea
So the idea is rather simple, by tracking when I did what I can show in an app what is most probably that I would have to do in the near future. It can show me what is overdue, what I did not do in such a long time I might consider it again and what I don't have to bother about. By using AI, I can make better and better predictions for when something is due. I will have to consider several different cases:

* *near regular actions*; things I do more or less weekly or bi-weekly but not exactly or at least they are not bound to a day of the week for instance.
* *build-up actions*; things that build up to a point that somethings has to be done. Laundry for instance, the pile keeps building up, so that a long period of not doing anything must be compensated by multiple actions in a shorter period to get rid of the laundry pile.
* *rare festivities*; things that are incidental and rare but recurring, such as maybe visiting a museum (or your (grand)parents), you should not be nagged about these things but rather be suggested to you. 

# First prototype
In the first prototype I hacked together a functional single-user (that's me!) app with a Cloudstore database and a Bootstrap UI. Its current features:

* add (and remove) actions manually with category and subcategories in a data explorer view
* a dashboard overview with donut graphs to indicate whether I am overdue and what the last time was, ordered by urgency
* quickly add a new action from the dashboard 
* the *rare festivities* are guessed from being grossly overdue and are put on a transparent ignore list
* due times are now estimated from a simple average of previous intervals 

![doocycle-prototype1](/img/projects/doocycle/doocycle-pr1.png)

I have been using it now for a while and it is rather fun and informative. It takes very little time to add existing activities and I am actually reminded and motivated to do certain chores or work again on certain projects.

# Plan for next protoype
First things to do are:
* add a login and registration to allow other users to play around with it
* show statistics per (sub)category
* try out more sophisticated algorithms (or AI) to predict *near regular actions* and *build-up actions*
* streamline the flow of making it feel like an actual app
