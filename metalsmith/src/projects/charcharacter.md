---
title: CharCharacter.js: Giving Characters Character Again
tag: charcharacter
image: th_17.png
description: Donâ€™t let fonts prevent you from putting character in characters. Add some lines with CharCharacter.js.
date: 2015-05-29
type: project
status: todo
layout: project.html
---

When Iâ€™m not doodling doodles, I doodle wordles. The modern latin alphabet is very flexible. While there are thousands of fonts to show for this, I feel this is not enough. Why should a character always look the same? Why canâ€™t it depend on the word youâ€™re writing? Well it can be done somewhat using a thing called ligatures in typography. Ligatures are specific gylphs in the font for a grouping of subsequent characters, such as: fl, fi, and Th. But what I want are more complex and maybe random glyph alterations to give a word character.

Looking at my world doodles, the thing that I always do is extend my lâ€˜s and gâ€˜s. The l must be the loveliest letter of them all. Name a word that starts with an l and does not sound lovely? You canâ€™t! But an l later in the word also carries the word. Literally. By elongating the onset of the l we can let the l carry a large portion of the word. That is, unless other letters block the l from doing so. The i and j can break it with their nasty punctuation. But the f takes a gentler approach guiding the l down. In fact, the f is a source itself, a source of fast forward fightingness.

But it doesnâ€™t end there. The g pulls the word and the y tries its best too, until it meets a p or q. The q however is a unique letter that has reverse powers of the g, letting a word sit on its tail.

So, I wrote a small JavaScript library helped with some CSS that can read text on a page and at these characteristic features described above. It currently only works well on monospace fonts, with glyphs that let the standard font glyphs merge almost perfectly with my CSS styled lines. See the restuls below. First a word in the regular Courier font, then a series of words in the same font, but enhanced using CharCharacter.js (check it out on Github).
