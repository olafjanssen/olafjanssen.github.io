---
title: Digital Dummy
tag: digitaldummy
image: th_8.png
description: An experiment in creating a module for the LMS system Instructure Canvas. It is a blog-like portfolio for students to show their daily progress in an easy accessible way.
date: 2016-08-25
type: project
layout: project.html
---

## The situation
IT & Media Students at Fontys University of Applied Sciences get fewer and fewer lectures. They build up a portfolio of their work. Not necessarily their best work, but everthing they did in the process of getting where they are now. They are assessed on the content of this portfolio. During the semester they can ask feedback, but in practice many students wait till the last moment before compiling their portfolio. By that time, they have lost the failures, old prototypes, first drafts and their motives for making changes and improvements.

As a coordinator for the third semester and supervising an overhaul of the form, themes and content of the semester I asked myself the following question:

`How can I use the available Learning Management System (LMS) for this semester that allows for provisional assessment and feed-forward on the experimental learning journey of the individual students?`

## Design and implementation
The LMS system (Instructure Canvas) is a given and everything a student does should ideally be reflected in this system. To be able to give feedback and feed-forward to students, students must be able to show what they have done in the last week(s). I set the following design challenge:

`Design an easy accessible digital portfolio that allows students to store their daily progress in the Canvas environment, such that the level of self-reflection and feed-forward of the teachers is increased.
`

Because first and failed attempts are often thrown away and especially from those attempts a student can show its progress, we would like to motivate students to at least make note of these attempts. The product should be easy and accessible enough so it doesn't pull students out of their flow. To ensure a safe learning environment, their work should be stored in a private environment.

Must haves: 
* The student's process should be clear for both the student and the teacher.
* Pictures and video's should be easily uploaded from smartphones.
* Uploaded work should, in principle, only be accessible to the student and his teachers.

Should haves:
* All forms of data that Canvas allows should be directly visible and not hidden behind links.
* A fallback must exist if the implemented product breaks down.

Could haves:
* It should load faster than the standard Canvas elements.
* At the end of the semester the portfolio should be downloadable.
* Teachers can give feedback directly in the portfolio.

Of course existing services are an option. However, externe (micro)blog sites zoals Tumblr, Pinterest, Twitter, WordPress are usually limited in the types of data they allow or show in a friendly fashion. Data is usually stored on overseas servers which is not what we want with student material and privacy settings can be difficult or impossible. There are existing services for Canvas but they are usually bulky, store their own data and have no elegant mobile solution for uploading photos and videos.

The product, called Digital Dummy, is a webpage following the the Learning Tools Interoperability (LTI) standard. In this way, Canvas is used for the secure storage of the data and the product appears in the Canvas course menu. The Digital Dummy is a special view wrapped around a standard Canvas assignment that students resubmit to. If the  Digital Dummy breaks down, all the data is still accessible using the standard Canvas interface. By showing all submissions at once in a format that looks like a blog, one can easily scroll through all the work. To show all file formats directly the Crocodoc system that Canvas uses itself is used.

By using smart and lazy loading of data using the infinite scroll principle, the Digital Dummy works relatively fast. The bottleneck being of course the API calls to the Canvas server.

Because the Digital Dummy is in essence a responsive webpage, from the Canvas app we can link to a mobile friendly version of the Digital Dummy. This page can be saved on the home screen of your smartphone and allows for uploading video's with only two finger touches.

The final product can be found on GitHub: [github.com/olafjanssen/digitaldummy](https://github.com/olafjanssen/digitaldummy).

## Demo
A demo of the product with Dutch explanation for the students. The product has, since then, improved a bit in functionality and look & feel.

<div class="embed-container"><iframe src="https://www.youtube.com/embed/TypSn1CsCoM" frameborder="0" allowfullscreen></iframe></div>
