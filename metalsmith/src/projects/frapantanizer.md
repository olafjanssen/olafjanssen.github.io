---
title: Bikkel's Language Frapantanizer
tag: frapantanizer
image: th_23.png
description: A simple text replacement tool written in Pascal, showing my passion for language. It changed ordinary words by its weirder sounding (Dutch) synonym. By frapantanizing your documents, you would can turn yourself into that thesaurus loving schmuck we all aspire to be.
date: 1997-02-05
type: project
layout: project.html
---

## Runtime footage
<div class="embed-container"><iframe src="https://www.youtube.com/embed/zlHM5GPj1zo" frameborder="0" allowfullscreen></iframe></div>

## Process
This little piece of code started with the following story. In English class our teacher had a tendency to think halfway his sentences about how to end that sentence. At one point he went (in Dutch) *How can I...*, where context would beg the finish *say this?*. However, I whispered the words *paraphrase this?* and the teacher subsequently ended his phrase with these words. Now to be clear, *to paraphrase* is very uncommon in Dutch (parafraseren).

The idea was born to create a tool to replace common words with more exotic ones: frapantanizer (frapant = weird in exotic Dutch). The code is written in Pascal and is not very complicated but challenging enough for my age. After programming the tool, a friend and me spend a lot of time browsing the dictionary for fun words. In the end we collected over 500 word pairs.

I tested the tool with the following example text:

```
Hallo, ik ben een beetje vreemd. Sommige mensen vinden dat ik moeilijkheden veroorzaak. Ik klaag bij de scheidsrechter, maar ik kreeg geen antwoord. Ik denk dat ik daarom voortaan week ga doen. Opeens kwamen er zomaar rare ideeën van iedereen. Dit kwam vroeger vaker voor, maar ik heb de mening
niet alles aan de boeren over te laten. Toch kan ik op deze manier niet goed een beeld geven over deze vraag. Ik denk dat ik dit niet op een eenvoudige manier kan uitleggen, maar ik vind wel dat je erg verwaand doet, voor een CD. Wil je problemen krijgen?
```

This got frapantanized by the tool into:

```
Gegroet, ik ben een beetje frapant. Sommige mensen vinden dat ik perikelen veroorzaak. Ik klaag bij de arbiter, maar ik kreeg geen antwoord. Ik denk dat ik derhalve voortaan murw ga doen. Plotsklaps kwamen er lukraak curieuze ideeën van eenieder. Dit kwam toentertijd vaker voor, maar ik heb de opinie niet alles aan de peasants over te laten. Algelijk kan ik op deze wijze niet goed een visie geven over deze kwestie. Ik denk dat ik dit niet op een eenvoudige wijze kan uitleggen, maar ik vind wel dat je erg pretentieus doet, voor een 
Straalplaat. Wil je perikelen krijgen? 
```

## Reflection
The code is not too difficult but there was actual a use to the program which was a nice change to my usual programming experiments at the time. While I hated learning languages in school, in retrospect my love for languages found its way into this tool.

Highlight was when I handed in a frapantanized book report on Isabelle Allende's Eva Luna with more than 130 abstruse frapantanizations. Something outrageously dangerous to my grade I have not done ever since.

## Code
Download the code including the word list as [blf.zip](https://www.dropbox.com/s/h0be7h7ibdtjfqe/blf.zip?dl=0).

