---
title: RoadToNowhere: Trip & Trapped
tag: roadtonowhere
image: th_34.png
description: RoadToNowhere is the start of a sprite-based 2D game written in Pascal and assembler for VGA graphics. It is mouse operated and has self-driving AI for cars driving around the town. There are no game elements in it but the simulation part works and the game is interactive.
date: 1998-09-11
type: project
layout: project.html
---

### Features
* 256 color VGA graphics using Assembler code within Pascal
* Pascal code for the game logic
* Sprite based dynamic map
* Sprite animations
* Mouse controlled
* Way-finding algorithm around the town
* Self-driving car AI
* interactive mini map to navigate the larger city map

### Gameplay
<iframe width="560" height="315" src="https://www.youtube.com/embed/MJ9OrldxCW4" frameborder="0" allowfullscreen></iframe>

### Process
With the experience of Alien Cliché, I wanted to continue my quest for interactive visual simulations. This time I was inspired by *Grand Theft Auto 1* (1997). In this game, cars drive around the town and interact with the player's car. This fascinated to the extend that I wanted to recreate this. Instead of driving a car myself, as in Grand Theft Auto, I wanted to control the player's car with the mouse the way you control units in *Dune 2* (1992) or *Command & Conquer 1* (1995).

First I started with creating a sprite-based map and designed tiles in *Photoshop*. The tiles showed basic road and scenery so I could start testing an actual map.

<a data-flickr-embed="true" data-header="true"  href="https://www.flickr.com/photos/95999935@N05/albums/72157680281266943" title="RoadToNowhere"><img src="https://c1.staticflickr.com/5/4192/33634791343_f86cef6104_z.jpg" width="640" height="371" alt="RoadToNowhere"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The tiles are stored in individual `.pcx` files. In a text file I defined a map in which each character represented a tile (with rotation). For some reason I used very inaccessible characters. 

```
ggg1121212112212111g
ggg2…ÕÕÕÕÕÀÕÕÕÕÕÕª1g
ggg1∫12212∫112t21∫2g
ggg2∫1ggg1∫2ggtt2∫2g
g121∫2g…ÕÕπ2gggg1∫1g
g2…Õºg2∫t1∫112212∫2g
g2∫12ggÃÕÕŒÕÕÀÕÕÕπ1g
g2»Õª21∫12∫12∫211∫2g
2121∫1g∫g1∫2g∫122∫2g
1…ÕÕπ2g»ÕÕπ2g»ÕÕÕπ1g
1∫12∫22211∫121221∫2t
2∫21ÃÕÕÕÕÕŒÕÕÕÀÕÕπ1t
1∫12∫21221∫211∫21∫1t
2∫21ÃÕÕÕÕÕπ2g1∫12∫2g
1∫12∫1122g∫22g∫11∫1g
2∫21∫2tttgÃÕÕÕπ2P∫2g
1∫12∫2ttgg∫211∫12∫2t
2∫12∫21121∫212ÃÕÕº1g
1»ÕÕ ÕÕÕÕÕ ÕÕÕº121gg
1212121212212121ggtt
```

Once I could load the tiles into a navigable map, I started to add cars. I wrote algorithmic rules for the cars so that they would break near corners or other cars, make turns on crossings and try to overtake cars that were in the way. The code for this is long and ugly but in lieu of machine learning it works really well. The cars drive random routes but actually try to follow the rules of the road.

Then, I added police cars that could be operated by the user. The user can set a target for the car to drive to. When the user sets a target, an in-memory map is created which stores the distance to the location from the target to every spot on the map. In this way the police car knows how to drive from every spot on the map.

<pre><code class="language-pascal">Procedure MakeTargetMap;
VAR
i,j    : integer;
len    : byte;
cx,cy  : byte;
vdir   : byte;
z      : byte;
tnr    : byte;
BEGIN
     if (butmode[5]=2) then tnr:=1;
     if (butmode[6]=2) then tnr:=2;
   for i:=1 to 20 do for j:=1 to 20 do tmap[tnr][i][j]:=255;
   cx:=1+target[tnr].x div 40;cy:=1+target[tnr].y div 40;
   tmap[tnr][cy][cx]:=0;
   for i:=1 to 3000 do
   begin
    cx:=1+target[tnr].x div 40;cy:=1+target[tnr].y div 40;
    len:=0;
    vdir:=Random(4)+1;
    for j:=1 to 50 do
    begin
     inc(len);z:=0;
     if (dmap[cy][cx]='Õ') and (vdir=1) then z:=1;
     if (dmap[cy][cx]='Õ') and (vdir=2) then z:=2;
     if (dmap[cy][cx]='∫') and (vdir=4) then z:=4;
     if (dmap[cy][cx]='∫') and (vdir=3) then z:=3;
     if (dmap[cy][cx]='º') and (vdir=1) then z:=4;
     if (dmap[cy][cx]='º') and (vdir=3) then z:=2;
     if (dmap[cy][cx]='»') and (vdir=2) then z:=4;
     if (dmap[cy][cx]='»') and (vdir=3) then z:=1;
     if (dmap[cy][cx]='ª') and (vdir=1) then z:=3;
     if (dmap[cy][cx]='ª') and (vdir=4) then z:=2;
     if (dmap[cy][cx]='…') and (vdir=2) then z:=3;
     if (dmap[cy][cx]='…') and (vdir=4) then z:=1;
     if (dmap[cy][cx]='') and (vdir=3) then z:=Random(2)+1;
     if (dmap[cy][cx]=' ') and (vdir=2) then begin z:=Random(2)+1; if (z=1) then z:=4; end;
     if (dmap[cy][cx]=' ') and (vdir=1) then begin z:=Random(2)+1; if (z=2) then z:=4; end;
     if (dmap[cy][cx]='Ã') and (vdir=2) then z:=Random(2)+3;
     if (dmap[cy][cx]='Ã') and (vdir=3) then begin z:=Random(2)+1; if (z=2) then z:=3; end;
     if (dmap[cy][cx]='Ã') and (vdir=4) then begin z:=Random(2)+1; if (z=2) then z:=4; end;
     if (dmap[cy][cx]='À') and (vdir=1) then begin z:=Random(2)+1; if (z=2) then z:=3; end;
     if (dmap[cy][cx]='À') and (vdir=2) then z:=Random(2)+2;
     if (dmap[cy][cx]='À') and (vdir=4) then z:=Random(2)+1;
     if (dmap[cy][cx]='π') and (vdir=1) then z:=Random(2)+3;
     if (dmap[cy][cx]='π') and (vdir=3) then z:=Random(2)+2;
     if (dmap[cy][cx]='π') and (vdir=4) then begin z:=Random(2)+1; if (z=1) then z:=4; end;
     if (dmap[cy][cx]='Œ') and (vdir=1) then begin z:=Random(3)+2; if (z=2) then z:=1; end;
     if (dmap[cy][cx]='Œ') and (vdir=2) then z:=Random(3)+2;
     if (dmap[cy][cx]='Œ') and (vdir=3) then z:=Random(3)+1;
     if (dmap[cy][cx]='Œ') and (vdir=4) then begin z:=Random(3)+1; if (z=3) then z:=4; end;
     if (z=1) then inc(cx);
     if (z=2) then dec(cx);
     if (z=3) then inc(cy);
     if (z=4) then dec(cy);
     if (z=0) then Break;
     if (len<=tmap[tnr][cy][cx]) then tmap[tnr][cy][cx]:=len; vdir:=z;
		 end;
		 end;
END;</code></pre>

Finally, you can nuke cars and a sprite animation shows the car exploding.

### Reflection
While the algorithm is far from elegant. I was very pleased with being able to create cars that drive around the city using actual driving dynamics (instead of fixed animations). This allowed for a lot of fun while watching cars trying to overtake each other or speeding around corners and crashing into buildings. It is now clear that my motivation was more in the simulation part than the gaming part, which explains why my work on this game stopped here.

I started to notice that compiled Pascal code was not very efficient. Also I noticed that the procedural style of programming got in the way. At that time I came into contact with C++ and started to experiment with Object Oriented Programming. At the bottom of this page you can find some of my first C++ code in the form of a C++ port of this game. 

### Code
You can download the code as [road2nowhere.zip](https://www.dropbox.com/s/29lc4n2lefxriyo/road2nowhere.zip?dl=0). You need an old computer or a DOS emulator to run the game. While the game was written in Pascal, a stub of a C++ port can be found in the zip. For fun, I include the code here to show first use of classes and how I load the sprites from an external data source instead of hardcoding loading each sprite in very not-DRY code.

<pre><code class="language-cpp">// RoadToNowhere : Trip&amp;Trapped

#include&lt;dos.h&gt;
#include&lt;stdio.h&gt;
#include&lt;stdlib.h&gt;
#include&lt;iostream.h&gt;
#include&lt;conio.h&gt;
#include&lt;alloc.h&gt;
#include&lt;string.h&gt;


#include&quot;vga.h&quot;
#include&quot;sprites.h&quot;
#include&quot;map.h&quot;
#include&quot;palette.h&quot;

// procedures
void loadsprites(void);

// global vars
int dx,dy;

void cammover(void)
{
 char dir;
 if (kbhit)
 {
  dir=getch();
  if(dir==106) dx-=1;
  if(dir==108) dx+=1;
  if(dir==105) dy-=1;
  if(dir==107) dy+=1;
  if(dir==27) {vga.init_txt(); exit(1); }

  dmap.cx+=dx;dmap.cy+=dy;
 }
  if(dmap.cx&lt;0) dmap.cx=10; if(dmap.cx&gt;12*40) dmap.cx=12*40;
  if(dmap.cy&lt;0) dmap.cy=10; if(dmap.cy&gt;15*40) dmap.cy=15*40;
}

void main(void)
{

 clrscr();

 dmap.set_map(&quot;test2.map&quot;);
 sl.set_mapfile(&quot;map.lst&quot;);
 pal.load_pal(&quot;road.pal&quot;);

 loadsprites();

 vga.init_virt();
 vga.init_vga();
 vga.clrscr(0);

 pal.use_pal();

while(1==1)
{
 dmap.shw_map();
 vga.flipscr();
 cammover();
}

 vga.close_virt();
 vga.init_txt();
}

void loadsprites(void)
{
 FILE *listf;
 char *fname;
 int  rot,nr,i;

 //mapsprites

 cout &lt;&lt; &quot;*** loading mapsprites\n&quot;;
    if ((listf = fopen(sl.map,&quot;rt&quot;))==NULL) { cerr &lt;&lt; &quot;! error opening: &quot; &lt;&lt; sl.map; exit(1); }
    nr=0;
    while(!feof(listf))
    {
      nr++;
      fscanf(listf,&quot;%d %s\n&quot;,&amp;rot,fname);
//      cout &lt;&lt; nr &lt;&lt; &quot; =&gt; &quot; &lt;&lt; rot &lt;&lt; &quot; * &quot; &lt;&lt; fname &lt;&lt; &quot;\n&quot;;
    }
    fclose(listf);
 cout &lt;&lt; &quot;= found &quot; &lt;&lt; nr &lt;&lt; &quot; sprites\n&quot;;
    mspr = new mapsprite[nr];
    listf = fopen(sl.map,&quot;rt&quot;);
    for(i=0;i&lt;nr;i++)
    {
     fscanf(listf,&quot;%d %s\n&quot;,&amp;rot,fname);
     mspr[i].set_sprite(fname);
     mspr[i].rot_sprite(rot);
 cout &lt;&lt; &quot;+ loaded: &quot; &lt;&lt; fname &lt;&lt; &quot;\n&quot;;
    }
}</code></pre>
