---
title: Variability of the vertical velocity in the tropical stratosphere and troposphere
tag: tropicalpipe
image: th_54.png
description: This report resulted from my work on a three month internship at KNMI, the Royal Netherlands Meteorological Institute. My primary target for this project was to ﬁnd out if there is a daily cycle in the vertical wind of the stratosphere using the ERA-40 data archive, and collect and analyse the data using FORTRAN.
date: 2004-01-15
type: project
layout: project.html
---

## The report
During the internship I learned to code in FORTRAN, work with streamplots in Matlab and write a report using LaTeX. You can download and read the entire [report.pdf](https://www.dropbox.com/s/vllfovfcn3iptj0/KNMI%20Report%20%28o.t.a.janssen%29.pdf?dl=0").

## Preface to the report
This report is realized as a result from my work on a three month lasting project  at KNMI, the Royal Netherlands Meteorological Institute. To be precise, I spent my days at the Modelling group of the Atmospheric Composition division, which in turn is part of the department of Climate research and Seismology.

My primary target for this project was to ﬁnd out if there is a daily cycle in the vertical wind of the stratosphere using the ERA-40 data archive. In addition, since nobody was exactly sure how much work this would entail, my secondary target was to generally ﬁnd out what I could about the variability of the vertical wind. I ﬁrst had to familiarize myself with a new computer environment, learn a new yet outdated programming language (FORTRAN does have its amiable sides though), and understand the ERA-40 data retrieval system. Knowing my adaptive skills in this area, it would not become a major obstacle and I was able to work fully with all the necessary tools after a week or two.

During the ﬁrst month I found most joy in trying out new ways of representing the data and consequently in the long debugging hours before ﬁnally producing the desired plots. Gradually, this changed when I began to understand much better what I was, in fact, investigating and the information in the plot became more interesting than the plot itself. At the end of the period, I discovered what I could have done better in the beginning had I known about it.  This is, of course, one of the educational sides of a relatively short-term project. Nonetheless, I think I have produced an interesting report with a few answers and openings for further investigation.

The atmosphere within the group was terriﬁc, something that could not always be said about the Dutch autumn weather outside. I would like to thank my direct supervisor Peter Siegmund for all his support during this time and for the discussions about my report and the sometimes exotic plots I produced. I would also like to thank Hennie Kelder for awakening my interest with his lectures on atmospheric physics in university and for giving me the opportunity to do this project at KNMI.

## Abstract
The behaviour of the vertical motion in the tropical stratosphere is investigated by looking at daily, annual, and trend variabilities. For this, ERA-40 re-analysis data from 1960 to 1999 are used. The tropically (20◦S-20◦N) and annually averaged re-analyses vertical velocity diﬀers signiﬁcantly (0.4 mPas−1, which is at least 40%) from the ﬁrst-guess forecast. A daily cycle is found. Strongest upward vertical motion is found at noon local time, while at other longitudes the vertical motion follows that of the tropospheric zonal Walker circulation. The total tropical upward mass ﬂux through the 100 hPa surface is 120 108kgs−1 and has a trend of ( 20  3) 108 kgs−1dec−1. A calculation using transformed Eulerian mean vertical velocities  is estimated to result in 20% larger mass ﬂuxes. The region of tropical upward motion at 50 hPa is narrower after 1979 (22◦S-22◦N) than before (35◦S-30◦N) and varies less from winter to summer. However, the DJF-JJA 100 hPa tropical upward mass ﬂux diﬀerence remains about 60 108 kgs−1. A strong correlation between the temperature and vertical velocity of single-year DJF and JJA averages is found    at 50 hPa of about 0.56, while at 100 hPa there is no correlation found. In the tropical region a maximum correlation is found using monthly averages, in which the temperature lags 18 days on the vertical velocity. A QBO signal is found in the cross-isobaric mass ﬂux, as well as in the temperature. Stronger trends are visible after 1979, when also the narrowing of the tropical upward region takes place. The introduction, then, of most of the satellite data in the ERA-40 data set may cause the changes in the not very robustly calculated vertical velocity.

