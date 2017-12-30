---
title: "CharCharacter.js: Giving Characters Character Again"
tag: charcharacter
image: th_17.png
description: "Don't let fonts prevent you from putting character in characters. Add some lines with CharCharacter.js."
date: 2015-05-29
type: project
layout: project.html
---

When I'm not doodling doodles, I doodle wordles. The modern latin alphabet is very flexible. While there are thousands of fonts to show for this, I feel this is not enough. Why should a character always look the same? Why can't it depend on the word you're writing? Well it can be done somewhat using a thing called ligatures in typography. [Ligatures](http://www.webdesign.org/photoshop/text-effects/typography-tutorial-a-primer-on-ligatures.20379.html) are specific gylphs in the font for a grouping of subsequent characters, such as: fl, fi, and Th. But what I want are more complex and maybe random glyph alterations to give a word character.

![charcharacter-drawing](/img/projects/charcharacter/belined-up.jpg)

Looking at my world doodles, the thing that I always do is extend my *l*'s and *g*'s. The *l* must be the loveliest letter of them all. Name a word that starts with an *l* and does not sound lovely? You can't! But an *l* later in the word also carries the word. Literally. By elongating the onset of the *l* we can let the *l* carry a large portion of the word. That is, unless other letters block the *l* from doing so. The *i* and *j* can break it with their nasty punctuation. But the *f* takes a gentler approach guiding the *l* down. In fact, the *f* is a source itself, a source of fast forward fightingness.

But it doesn't end there. The *g* pulls the word and the *y* tries its best too, until it meets a *p* or *q*. The *q* however is a unique letter that has reverse powers of the *g*, letting a word sit on its tail.

![charcharacter-output](/img/projects/charcharacter/charcharacter-output.png)

So, I wrote a small JavaScript library helped with some CSS that can read text on a page and at these characteristic features described above. It currently only works well on monospace fonts, with glyphs that let the standard font glyphs merge almost perfectly with my CSS styled lines. See the restuls below. First a word in the regular Courier font, then a series of words in the same font, but enhanced using CharCharacter.js (check it out on [Github](https://github.com/olafjanssen/charcharacter)).

