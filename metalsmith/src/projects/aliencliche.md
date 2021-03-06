---
title: "Alien Cliché: A Physics Based Shooter"
tag: aliencliche
image: th_21.png
description: A 2D game I wrote in Pascal using Assembler for the VGA graphics. You shoot missiles that are attracted by the gravity of multiple planets. It can be seen as the forerunner of Angry Birds Space, but without birds and with a background story packed with 90ies nostalgia events.
date: 1998-08-03
type: project
layout: project.html
---

## Features
* 256 color VGA graphics using Assembler code within Pascal
* Pascal code for the game logic
* Single player mode with up to 3 computer players
* AI based on Monte-Carlo simulations of possible outcomes
* Painstakingly hand drawn bitmap font
* Efficient collision detection
* Planets that can be destroyed pixel by pixel

## Gameplay

<div class="embed-container"><iframe src="https://www.youtube.com/embed/pK3GHcEP5t0" frameborder="0" allowfullscreen></iframe></div>

## Process
I just started to get the hang of using VGA and Assembler to speed things up. I finally could visualize my passion for doing simulations. With high school physics and math I hoped to be able to visualize the gravitational pull. At the time I played the game *Worms* a lot and also had fond memories of the similarly funny game *Scorched*. With this inspiration I set out to write my own *Worms* clone but in space with an actual physics engine.

I do not recall much of the actual process. I remember struggling with doing Monte-Carlo simulations for the computer player where the missiles would be fired in the background and not on screen to simulate the computer player considering several options and choosing the best one. The planets are sprites with one of the 256 colors available set as alpha (transparent) color. The sprites had to be altered by the exploding missiles and were designed in *Photoshop* and saved into my own format including my own palette of 256 colors. I relied heavily on snippets of code I found online to do the assembler part.

All-in-all the programming from start to finish lasted about a month (looking at the file dates).

## Reflection
This was my major transition from text based games and standard library graphics to fast assembler-accelerated VGA graphics. The game was almost finished to a level that I could actually play it with friends and have fun, but I never gave it the podium it should have gotten.

## Backstory of the game
Below is the backstory that is shown in the opening credits of the game (sic). It contains many 90ies references, many of which I picked up from watching Jay Leno late at night. It features the character Jan Null. It had no clue when writing this where that name came from, but Googling him I found out he is a famous meteorologist. I can't recall why he would have made an impact on me other than his name.

```
The Story.
     
The year is 1998.

A humongous asteroid is heading for our precious little earth. If you have seen the god knows why blockbuster movies Deep Impact and Armageddon you kinda know the story. Except now the president of the US of A wasn't so concerned with his people. He gave NASA the orders to create a hyperengine-driven spaceship to make a brand new start on a different planet. Just before Fox Mulder could discover this sceem, Mr. Clinton took off with his closest friends such as Al Gore, Ross Perot and of course Miss Jones and Lewinsky leaving Hillary and the rest of America with no clue behind.
     
At the same time mother russia overspied the USA and Jeltsin created a vodka-driven spacemachine. Even Saddam Hussein has prepared himself by creating a Kurd-driven apparatus in the UN-free factories. The last escapists were prince Willem-Alexander of the Netherlands and his maybe soon to became wife emily.
     
A few hours before impact the ships left earth to let mankind survive. Two hours later all life on earth was scorched or drowned. Because of the impact the earth started spinning, solar winds were generated and the four ships were pulled by an antigravity protonflux field which opened a temporary timespace gate. This gate changed the people inside the ships. The prince was replaced by ThePudge from Pudgcom, Clinton by Elvis, Jeltsin by Stalin and Saddam by Jan Null.

It was unfortunate that they all ended up in the same solar system and or course only one may survive even if whole planets would be destroyed.

Welcome to Alien Cliché.
```

## Brutal in-game talk
While not shown in the gameplay video, because for some reason it did not work in the latest compiled version of the game. At some point the players would shout (in on-screen text) war cries when firing and last words when killed. The idea for this was inspired by the fantastic game *Scorched*. The following is the data file I found defining the battle cries of the players.

```
NAME
Player
WARCRY
take this...dirty worm
die in hell
here's a present to die for
i love hi explosives
see you in hell
these shootings make me cry with happiness
i aim to please
bombs away!
LASTNOTE
ok so i'm dead
life could end worse...my nails aren't pulled
does this mean i'm gonna wear wings
i see the light..o no wait it was the explosion
i'll get you next time..hmm i can't i'm dead
NAME
Elvis
WARCRY
wow momma..this is one spicy chili-dog
hey man, let's do some wibblywobbly
you're nothing but a hounddog, you
it's time for you to wiggle your hips
you should have given me those cheeseburgers man
here's the proof that i'm still alive
did you steal my glittery costume, you
hey man watch out for elvis the alien-slayer
i shoot but if i weren't that fat i'd punch
they don't call me the king for nothing, eh?
i'm getting angry when i'm not properly fed
LASTNOTE
that ain't fair man, you messed with the hair
oh man... dead again
ladies and gentlemen, elvis has left the solar system
wow man that was one hot mamma
wow man those extra hotdogs gave me sum gas
me dead doesn't mean we'all have to get mushy, eh?
i'm dead man...dead
NAME
Stalin
WARCRY
die you capitalistic schweinski
even the spot on comrad gorbatsjov's head is harder to hit
a little present from mother russia
that's what you get if you don't join the party
i'll give you a one-way ticked to siberia
here's our dogski laika with a bigga surprise for you
LASTNOTE
communism shall prevail, i'll bet my mustache on it
oh well... at least there a still a zillion statues of me
if we're all equal..why am i the only one dying here
better dead than red...no wait
NAME
Jan Null
WARCRY
touch my el nino
there gonna be sum high pressure areas near you
take this...you mousson rain
temperatures are going to rise for you
your forecast is looking flashy
LASTNOTE
is this what they call the fog of war?
it's a bright day to die
oh man.. i forecast rain on my funeral
```

## The Code
The entire project can be downloaded as [aliencliche.zip](https://www.dropbox.com/s/2bnoqpbcivfm9nh/aliencliche.zip?dl=0). To run it you need an old computer or a DOS emulator. Below is the main project file. I include it because it is funny to see Pascal code online and to see the bad coding conventions of a teenager.

<pre><code class="language-pascal">PROGRAM Alien_Cliche;

{$R-}
{$X+}

USES dos,crt;

TYPE
     font   = array[1..2040] of string[8];
     smfont = array[1..238] of string[4];
     planet = array[0..99,0..99] of byte;
     acar = record
              x,y:real;
              vx,vy:real;
            end;
     aplr = record
              x,y:real;
              vx,vy:real;
              p:byte;
              pdir:integer;
              name:string[10];
              hlth:shortint;
              id:byte;
              col:byte;
            end;
     point = record
              d,v:real;
             end;
     source = record
               g:real;
               gx,gy,size:integer;
              end;
     Virtual = Array [1..64000] of byte;  { The size of our Virtual Screen }
     VirtPtr = ^Virtual;                  { Pointer to the virtual screen }
CONST
     VGA=$a000;
VAR
    CharSet : font;
    CharSml : smfont;
    times  : integer;
    Virscr : VirtPtr;                      { Our first Virtual screen }
    Planscr: VirtPtr;
   Planscr2: VirtPtr;
    Vaddr  : word;                        { The segment of our virtual screen}
    Paddr  : word;
    Paddr2 : word;
    Pall   : array[0..255,1..3] of byte;
    s      : array[1..16] of source;
    dot    : acar;
    plr    : array[1..8] of aplr;
    NumPlayers,pnr:byte;
    simg   : planet;
    trace  : array[1..100] of acar;
    t:real;
    key:char;
    Crash  : boolean;
    f      : text;
    NumPlanets:byte;
    i,j,x,y,bx,by: integer;

{-------------}
Procedure SetVGA;
BEGIN
  asm
        mov     ax,0013h
        int     10h
  end;
END;

Procedure SetText;
BEGIN
  asm
        mov     ax,0003h
        int     10h
  end;
END;

Procedure Move(var source, dest; count: word); Assembler;
asm
  push ds
  lds  si,source      {ds,si = source}
  les  di,dest        {es,di = dest}
  mov  cx,count       {cx = count}
  mov  ax,cx          {ax = count}
  cld
  shr  cx,2           {cx = count / 4}
  db   66h
  rep  movsw          {copy double words}
  mov  cl,al          {get rest bytes}
  and  cl,3
  rep  movsb          {copy rest}
  pop  ds
end;

Procedure Cls(Where:word;Col:byte); assembler;
asm
   push    es
   mov     cx, 32000;
   mov     es,[where]
   xor     di,di
   mov     al,[col]
   mov     ah,al
   rep     stosw
   pop     es
End;

Procedure GetPal(ColorNo : Byte; Var R,G,B : Byte);
  { This reads the values of the Red, Green and Blue values of a certain
    color and returns them to you. }
Begin
   Port[$3c7] := ColorNo;
   R := Port[$3c9];
   G := Port[$3c9];
   B := Port[$3c9];
End;

Procedure SetPal(ColorNo : Byte; R,G,B : Byte);
  { This sets the Red, Green and Blue values of a certain color }
Begin
   Port[$3c8] := ColorNo;
   Port[$3c9] := R;
   Port[$3c9] := G;
   Port[$3c9] := B;
End;

Procedure WaitRetrace; Assembler;
Label
	L1, L2;
Asm
 Mov   Dx, 3dAh
L1:
 In    Al, Dx
 Test  Al, 8
 Jnz   L1
L2:
 In    Al, Dx
 Test  Al, 8
 Jz    L2
End;

Procedure Blackout;
  { This procedure blackens the screen by setting the pallette values of
    all the colors to zero. }
VAR loop1:integer;
BEGIN
  WaitRetrace;
  For loop1:=0 to 255 do
    SetPal(loop1,0,0,0);
END;

Procedure GrabPallette;
VAR loop1:integer;
BEGIN
  For loop1:=0 to 255 do
    Getpal (loop1,pall[loop1,1],pall[loop1,2],pall[loop1,3]);
END;

Procedure Fadeup;
VAR loop1,loop2:integer;
    Tmp : Array [1..3] of byte;
      { This is temporary storage for the values of a color }
BEGIN
  For loop1:=1 to 64 do BEGIN
      { A color value for Red, green or blue is 0 to 63, so this loop only
        need be executed a maximum of 64 times }
    WaitRetrace;
    For loop2:=0 to 255 do BEGIN
      Getpal (loop2,Tmp[1],Tmp[2],Tmp[3]);
      If Tmp[1]>0 then dec (Tmp[1]);
      If Tmp[2]>0 then dec (Tmp[2]);
      If Tmp[3]>0 then dec (Tmp[3]);
        { If the Red, Green or Blue values of color loop2 are not yet zero,
          then, decrease them by one. }
      SetPal(loop2,Tmp[1],Tmp[2],Tmp[3]);
        { Set the new, altered pallette color. }
    END;
  END;
END;

Procedure RestorePallette;
VAR loop1:integer;
BEGIN
  WaitRetrace;
  For loop1:=0 to 255 do
    SetPal(loop1,Pall[loop1,1],Pall[loop1,2],Pall[loop1,3]);
END;

Function IntToStr(I: Longint): String;
{ Convert any integer type to a string }
var
  S: string[11];
begin
  Str(I, S);
  IntToStr := S;
 end;

Function StrToInt(text: string): integer;
{ Convert any integer type to a string }
var
  i,j: integer;
begin
  Val(text, i,j);
  StrToInt := i;
 end;

Procedure Putpixel (X,Y : Integer; Col : Byte; where:word);
begin
     if(x<0) or (x>319) or (y<0) or (y>199) then {chop} else
asm
    mov     ax,[where]              { 8  }
    mov     es,ax                   { 2  }
    mov     bx,[X]                  { 8  }
    mov     dx,[Y]                  { 8  }
    mov     di,bx                   { 2  }
    mov     bx, dx                  { 2  }
    shl     dx, 8                   { 8  }
    shl     bx, 6                   { 8  }
    add     dx, bx                  { 3  }
    add     di, dx                  { 3  }
    mov     al, [Col]               { 8  }
    stosb                           { 11 }
end;
end;

Procedure Circle (oX,oY,rad:integer;Col:Byte);
     VAR deg:real;
         X,Y:integer;
     BEGIN
       deg:=0;
       repeat
         X:=round(rad*COS (deg));
         Y:=round(rad*sin (deg));
         putpixel (x+ox,y+oy,Col,vga);
         deg:=deg+0.005;
       until (deg>6.4);
     END;

function sgn(a:real):integer;
begin
     if a>0 then sgn:=+1;
     if a<0 then sgn:=-1;
     if a=0 then sgn:=0;
end;

Procedure SetUpVirtual;
VAR
i:integer;
BEGIN
  GetMem (VirScr,64000);
  vaddr := seg (virscr^);
  GetMem (PlanScr,64000);
  paddr := seg (planscr^);
  GetMem (PlanScr2,64000);
  paddr2:= seg (planscr2^);
END;

Procedure ShutDown;
VAR
i:integer;
BEGIN
  FreeMem(VirScr,64000);
  FreeMem(PlanScr,64000);
  FreeMem(PlanScr2,64000);
END;

Procedure Hline (x1,x2,y:word;col:byte;where:word);
  { This draws a horizontal line from x1 to x2 on line y in color col }
BEGIN
  if (x2>319) then x2:=319; if (x1<0) then x1:=0;
  if(x2<0) or (x1>319) or (y<0) or (y>199) then {chop} else
  asm
  mov   ax,where
  mov   es,ax
  mov   ax,y
  mov   di,ax
  shl   ax,8
  shl   di,6
  add   di,ax
  add   di,x1

  mov   al,col
  mov   ah,al
  mov   cx,x2
  sub   cx,x1
  shr   cx,1
  jnc   @start
  stosb
@Start :
  rep   stosw
  end;
end;

procedure flip(source,dest:Word);
  { This copies the entire screen at "source" to destination }
begin
  asm
    push    ds
    mov     ax, [Dest]
    mov     es, ax                  { ES = Segment of source }
    mov     ax, [Source]
    mov     ds, ax                  { DS = Segment of source }
    xor     si, si                  { SI = 0   Faster then mov si,0 }
    xor     di, di                  { DI = 0 }
    mov     cx, 32000
    rep     movsw                   { Repeat movsw 32000 times }
    pop     ds
  end;
end;

{------------}
Procedure Planets;
type
xy=record
   regel:array[0..319] of byte;
end;
pa=record
    r,g,b:byte;
end;
pa2=array[0..255] of pa;
var
i,j : word;
p : file of pa2;
cPa:pa2;
cXy:xy;
count:integer;
f:file of xy;
key:char;
BEGIN
     cls($a000,0);
     assign(p, 'plan.pal');
     reset(p);
     read(p,cPa);
     for i:=0 to 255 do setpal(i,cPa[i].r,cPa[i].g,cPa[i].b);
     close(p);
     assign(f,'plan.pic');
     reset(f);
     for j:=0 to 199 do
     begin
      read(f,cXy);
      for i:=0 to 319 do
      begin
           if (cXy.regel[i]=156) then cXy.regel[i]:=0;
            move(cXy.regel[i], mem[paddr : j*320+i ],1);
            move(cXy.regel[i], mem[paddr2: j*320+i ],1);
      end;
     end;
     close(f);

END;

procedure creatergbpalette;
var t:real;
    c,loop:integer;
begin
 t:=63/100;
 for loop:=1 to 100 do setpal(loop,round(t*loop),round(t*loop),round(t*loop));
 setpal(101, 30,20,0);
 setpal(102, 0,30,30);
 setpal(110,63,63,63); {white}
 setpal(111,63,00,00); {red}
 setpal(112,00,63,00); {green}
 setpal(113,00,00,63); {blue}
 for loop:=120 to 130 do setpal(loop,63,round(63/11*loop)-120,0); {red-yellow}
end;

Procedure InitCharSets;
VAR
f       : file of font;
f2      : file of smfont;
f3      : text;
i,j     : byte;
BEGIN
Assign(f,'bos20.fnt');
Reset(f);
 Read(f,CharSet);
close(f);
Assign(f2,'alcl.fnt');
Reset(f2);
 Read(f2,CharSml);
close(f2);
{Assign(f3,'smfont.fnt');
reset(f3);
for i:=0 to 25 do
begin
     readln(f3);
     for j:=1 to 6 do readln(f3,charsml[i*6+j]);
end;
close(f3);}
END;

Procedure CWrite(x,y : integer; txt :string;c1,c2 : integer);
VAR
i,j     : integer;
line    : string;
nr      : byte;
Code    : integer;
c       : byte;
alfa    : integer;
f       : text;
BEGIN
     if (x=-1) then x:=150-(round(8*length(txt)) div 2);
     for alfa:=1 to length(txt) do
     begin
      for j:=1 to 8 do
      begin
       for i:=1 to 8 do
       begin
        val(charset[(ord(txt[alfa])-32)*8+j][i],nr,code);
        if (nr=1) then c:=c1;
        if (nr=2) then c:=c2;
        if (nr<>0) then PutPixel(x+(alfa*8)+i,(y-1)+j,c,vaddr);
       end;
      end;
     end;
END;

Procedure CWriteSml(x,y : integer; txt :string;c1 : integer);
VAR
i,j     : integer;
line    : integer;
c       : byte;
alfa    : integer;
BEGIN
     if (x=-1) then x:=150-(round(5*length(txt)) div 2);
     for alfa:=1 to length(txt) do
     begin
      for j:=1 to 6 do for i:=1 to 4 do
      begin
          line := (ord(txt[alfa])-97)*6+j;
          if (txt[alfa]='0') then line:=156+j;
          if (txt[alfa]='1') then line:=162+j;
          if (txt[alfa]='2') then line:=168+j;
          if (txt[alfa]='3') then line:=174+j;
          if (txt[alfa]='4') then line:=180+j;
          if (txt[alfa]='5') then line:=186+j;
          if (txt[alfa]='6') then line:=192+j;
          if (txt[alfa]='7') then line:=198+j;
          if (txt[alfa]='8') then line:=204+j;
          if (txt[alfa]='9') then line:=210+j;
          if (txt[alfa]='.') then line:=216+j;
          if (txt[alfa]=',') then line:=222+j;
          if (strtoint(charsml[line][i])=1) then c:=c1 else c:=0;
          if (y+j<200) then putpixel(x+(alfa*5)+i,y+j,c,vaddr);
      end;
     end;
END;

function rad(alpha:real):real; begin
  rad:=(alpha/180)*pi; end;
function deg(alpha:real):real; begin
  deg:=(alpha/pi)*180; end;

Function CalcDir(x,y:real;g:integer) : real;
VAR
lx,ly,c:real;
d:integer;
BEGIN
    lx:=(s[g].gx-x); ly:=(s[g].gy-y);
    if (lx=0) then lx:=0.000001;
    if (sgn(lx)=-1) and (sgn(ly)=-1) then C:=deg(arctan(ly/lx));
    if (sgn(lx)=-1) and (sgn(ly)=+1) then C:=360+deg(arctan(ly/lx));
    if (sgn(lx)=+1) and (sgn(ly)=-1) then C:=180+deg(arctan(ly/lx));
    if (sgn(lx)=+1) and (sgn(ly)=+1) then C:=180+deg(arctan(ly/lx));
    if (sgn(lx)=-1) and (ly=0)       then C:=0;
    if (sgn(lx)=+1) and (ly=0)       then C:=180;
    CalcDir:=C;
END;

Function CalcVel(x,y:real;nr,g:integer) : real;
VAR
a,b,c,d:real;
BEGIN
    d:=CalcDir(x,y,g);
    if (nr=1) then
        if (d<=90) or (d>=270) then C:=s[g].g else C:=-1*s[g].g;
    if (nr=2) then
        if (d<=180) then C:=-1*s[g].g else C:=s[g].g;
    a:=(s[g].gx-x); b:=(s[g].gy-y);
    d:=(a*a+b*b); if (d=0) then CalcVel:=C else CalcVel:=C/d;
END;


Procedure LoadPlanet(g:integer);
VAR
i,j:integer;
BEGIN
    case g of
    1: for i:= 0 to 99 do for j:=0 to 99 do move(mem[paddr:(84+j)*320+15+i],simg[i][j],1);
    2: for i:= 0 to 64 do for j:=0 to 64 do move(mem[paddr:(9+j)*320+10+i],simg[i][j],1);
    3: for i:= 0 to 54 do for j:=0 to 54 do move(mem[paddr:(13+j)*320+98+i],simg[i][j],1);
    4: for i:= 0 to 44 do for j:=0 to 44 do move(mem[paddr:(88+j)*320+137+i],simg[i][j],1);
    5: for i:= 0 to 99 do for j:=0 to 99 do move(mem[paddr:(92+j)*320+215+i],simg[i][j],1);
    6: for i:= 0 to 64 do for j:=0 to 64 do move(mem[paddr:(12+j)*320+243+i],simg[i][j],1);
    7: for i:= 0 to 54 do for j:=0 to 54 do move(mem[paddr:(12+j)*320+166+i],simg[i][j],1);
    8: for i:= 0 to 44 do for j:=0 to 44 do move(mem[paddr:(141+j)*320+136+i],simg[i][j],1);
    9: for i:= 0 to 99 do for j:=0 to 99 do move(mem[paddr2:(84+j)*320+15+i],simg[i][j],1);
   10: for i:= 0 to 64 do for j:=0 to 64 do move(mem[paddr2:(9+j)*320+10+i],simg[i][j],1);
   11: for i:= 0 to 54 do for j:=0 to 54 do move(mem[paddr2:(13+j)*320+98+i],simg[i][j],1);
   12: for i:= 0 to 44 do for j:=0 to 44 do move(mem[paddr2:(88+j)*320+137+i],simg[i][j],1);
   13: for i:= 0 to 99 do for j:=0 to 99 do move(mem[paddr2:(92+j)*320+215+i],simg[i][j],1);
   14: for i:= 0 to 64 do for j:=0 to 64 do move(mem[paddr2:(12+j)*320+243+i],simg[i][j],1);
   15: for i:= 0 to 54 do for j:=0 to 54 do move(mem[paddr2:(12+j)*320+166+i],simg[i][j],1);
   16: for i:= 0 to 44 do for j:=0 to 44 do move(mem[paddr2:(141+j)*320+136+i],simg[i][j],1);
    end;
END;

Procedure SavePlanet(g:integer);
VAR
i,j:integer;
BEGIN
    case g of
    1: for i:= 0 to 99 do for j:=0 to 99 do move(simg[i][j],mem[paddr:(84+j)*320+15+i],1);
    2: for i:= 0 to 64 do for j:=0 to 64 do move(simg[i][j],mem[paddr:(9+j)*320+10+i],1);
    3: for i:= 0 to 54 do for j:=0 to 54 do move(simg[i][j],mem[paddr:(13+j)*320+98+i],1);
    4: for i:= 0 to 44 do for j:=0 to 44 do move(simg[i][j],mem[paddr:(88+j)*320+137+i],1);
    5: for i:= 0 to 99 do for j:=0 to 99 do move(simg[i][j],mem[paddr:(92+j)*320+215+i],1);
    6: for i:= 0 to 64 do for j:=0 to 64 do move(simg[i][j],mem[paddr:(12+j)*320+243+i],1);
    7: for i:= 0 to 54 do for j:=0 to 54 do move(simg[i][j],mem[paddr:(12+j)*320+166+i],1);
    8: for i:= 0 to 44 do for j:=0 to 44 do move(simg[i][j],mem[paddr:(141+j)*320+136+i],1);
    9: for i:= 0 to 99 do for j:=0 to 99 do move(simg[i][j],mem[paddr2:(84+j)*320+15+i],1);
    0: for i:= 0 to 64 do for j:=0 to 64 do move(simg[i][j],mem[paddr2:(9+j)*320+10+i],1);
    1: for i:= 0 to 54 do for j:=0 to 54 do move(simg[i][j],mem[paddr2:(13+j)*320+98+i],1);
    2: for i:= 0 to 44 do for j:=0 to 44 do move(simg[i][j],mem[paddr2:(88+j)*320+137+i],1);
    3: for i:= 0 to 99 do for j:=0 to 99 do move(simg[i][j],mem[paddr2:(92+j)*320+215+i],1);
    4: for i:= 0 to 64 do for j:=0 to 64 do move(simg[i][j],mem[paddr2:(12+j)*320+243+i],1);
    5: for i:= 0 to 54 do for j:=0 to 54 do move(simg[i][j],mem[paddr2:(12+j)*320+166+i],1);
    6: for i:= 0 to 44 do for j:=0 to 44 do move(simg[i][j],mem[paddr2:(141+j)*320+136+i],1);
    end;
END;

Procedure DrawPlanet(x,y,g:integer);
VAR
i,j:integer;
BEGIN
     LoadPlanet(g);
     if (x+(s[g].size div 2)<0) or (x-(s[g].size div 2)>320)
     or (y+(s[g].size div 2)<0) or (y-(s[g].size div 2)>200)
     then {nothing}
     else
   begin
     for i:=0 to s[g].size-1 do
     for j:=0 to s[g].size-1 do
       begin
         if (simg[i][j]>0) then
         PutPixel(x+i-(s[g].size div 2),y+j-(s[g].size div 2),simg[i][j],vaddr);
       end;
   end;
END;

Procedure StarryNight;
VAR
i:integer;
j:byte;
BEGIN
     for i:=1 to 35 do FillChar(mem[vaddr:trunc(i*3500/cos(i))],1,random(2)+101);
END;

Procedure DrawBorder(xo,yo:integer);
VAR
i:integer;
BEGIN
     if (xo<0) then  for i:=0 to 199 do putpixel(-xo,i,random(101),vaddr);
     if (xo>bx-320) then for i:=0 to 199 do putpixel(bx-xo,i,random(101),vaddr);
     if (yo<0) then  for i:=0 to 319 do putpixel(i,-yo,random(101),vaddr);
     if (yo>by-200) then for i:=0 to 319 do putpixel(i,by-yo,random(101),vaddr);
END;

Procedure DrawDot;
VAR
i,j:integer;
q:integer;
xScr,yScr:integer;
BEGIN
     cls(vaddr,0);
     StarryNight;
     xScr:=x-160;yScr:=y-100;
     DrawBorder(xScr,yScr);
     for q:=1 to numPlanets do DrawPlanet(s[q].gx-xScr,s[q].gy-yScr,q);
     for i:=1 to 99 do PutPixel(trunc(trace[i].x-xScr),trunc(trace[i].y-yScr),100-i,vaddr);
     for j:=1 to NumPlayers do for i:=0 to 5 do
        hline(trunc(plr[j].x)-xScr-3,trunc(plr[j].x)-xScr+3,trunc(plr[j].y)-yScr-3+i,plr[j].col,vaddr);
     flip(vaddr,vga);
END;

Procedure DrawPlr2;
VAR
i,j:integer;
q:integer;
xScr,yScr:integer;
BEGIN
     cls(vaddr,0);
     StarryNight;
     xScr:=trunc(plr[pnr].x)-160;yScr:=trunc(plr[pnr].y)-100;
     DrawBorder(xScr,yScr);
     for q:=1 to numPlanets do DrawPlanet(s[q].gx-xScr,s[q].gy-yScr,q);
     for j:=1 to NumPlayers do for i:=0 to 5 do
         hline(trunc(plr[j].x)-xScr-3,trunc(plr[j].x)-xScr+3,trunc(plr[j].y)-yScr-3+i,plr[j].col,vaddr);
     flip(vaddr,vga);
END;

Procedure DrawPlr(vel,dir:integer);
VAR
i,j:integer;
q:integer;
xScr,yScr:integer;
dx,dy:integer;
c:byte;
BEGIN
     cls(vaddr,0);
     StarryNight;
     xScr:=trunc(plr[pnr].x)-160;yScr:=trunc(plr[pnr].y)-100;
     DrawBorder(xScr,yScr);
     for q:=1 to numPlanets do DrawPlanet(s[q].gx-xScr,s[q].gy-yScr,q);
     for j:=1 to numPlayers do for i:=0 to 5 do
         hline(trunc(plr[j].x)-xScr-3,trunc(plr[j].x)-xScr+3,trunc(plr[j].y)-yScr-3+i,plr[j].col,vaddr);
     dx:=round(plr[pnr].x-xScr+cos(rad(dir))*10);dy:=round(plr[pnr].y-yScr+sin(rad(dir))*10);c:=100;
     putpixel(dx,dy,c,vaddr);
     for i:=0 to 12 do hline(0,319,i,250,vaddr);
     CWrite( 10,2,plr[pnr].name,180,197);
     Cwrite(100,2,'hlth:'+inttostr(plr[pnr].hlth)+' spd:'+inttostr(vel)+' ang:'+inttostr(dir),100,0);
     flip(vaddr,vga);
END;

Procedure MoveDot;
VAR
i,j:integer;
BEGIN
{   if not Crash then}
   begin
     for i:=1 to numPlanets do dot.vx:=dot.vx+calcvel(dot.x,dot.y,1,i);
     for i:=1 to numPlanets do dot.vy:=dot.vy+calcvel(dot.x,dot.y,2,i);
     if (dot.x<0) or (dot.x>bx) then dot.vx:=-dot.vx;
     if (dot.y<0) or (dot.y>by) then dot.vy:=-dot.vy;
     dot.x:=dot.x-dot.vx;
     dot.y:=dot.y+dot.vy;
   end;
     inc(times);
     if (times=10) then
     begin
      for i:=99 downto 1 do begin trace[i+1].x:=trace[i].x; trace[i+1].y:=trace[i].y; end;
      trace[1].x:=dot.x;trace[1].y:=dot.y;
      times:=0;
     end;
END;

Procedure MovePlr;
VAR
i,j:integer;
BEGIN
{   if not Crash then}
   begin
     for i:=1 to numPlanets do plr[pnr].vx:=plr[pnr].vx+4*calcvel(plr[pnr].x,plr[pnr].y,1,i);
     for i:=1 to numPlanets do plr[pnr].vy:=plr[pnr].vy+4*calcvel(plr[pnr].x,plr[pnr].y,2,i);
     if (plr[pnr].x<0) or (plr[pnr].x>bx) then plr[pnr].vx:=-plr[pnr].vx;
     if (plr[pnr].y<0) or (plr[pnr].y>by) then plr[pnr].vy:=-plr[pnr].vy;
     plr[pnr].x:=plr[pnr].x-plr[pnr].vx;
     plr[pnr].y:=plr[pnr].y+plr[pnr].vy;
   end;
END;

Procedure DecHealth(x,y,frc:integer);
VAR
i,j:integer;
a,b,c:real;
d:integer;
BEGIN
    for i:=15 to 30+numPlayers*10 do hline(10,120,i,250,vaddr);
    for i:=1 to numPlayers do
    begin
         a:=(plr[i].x-x); b:=(plr[i].y-y);
         c:=(a*a+b*b); if (c=0) then d:=frc*4 else d:=round(frc*4/c);
         if (d=0) then
         begin
              Cwrite(10,15+i*10,plr[i].name,110,0);
              Cwrite(80,15+i*10,inttostr(plr[i].hlth),110,0);
         end;
         if (d>0) then
         begin
              plr[i].hlth:=plr[i].hlth-d*d;
              Cwrite(10,15+i*10,plr[i].name,111,0);
              if (plr[i].hlth>0) then Cwrite(80,15+i*10,inttostr(plr[i].hlth),111,0)
              else Cwrite(80,15+i*10,'RIP',111,0);
         end;
         if (plr[i].hlth<0) then
         begin
              sound(2000);delay(1000);nosound;
              for j:=i to numPlayers-1 do plr[j]:=plr[j+1];
              dec(numPlayers);
         end;
    end;
    flip(vaddr,vga);delay(5000);
END;


Procedure DoCrash(g:integer);
VAR
i,j:integer;
a,b,c,e,r:integer;
d:real;
BEGIN
    for i:=0 to 10 do begin Circle(160,100,i,120+i);Delay(100);sound(i*100); end;
    NoSound;
    for r:=0 to 10 do
    begin
       d:=0;
       repeat
         a:=round(r*COS (d))+x-(s[g].gx)+(s[g].size div 2);
         b:=round(r*sin (d))+y-(s[g].gy)+(s[g].size div 2);
         d:=d+0.005;
         if (a<0) or (a>s[g].size-1) then Continue;
         if (b<0) or (b>s[g].size-1) then Continue;
         simg[a][b]:=0;
       until (d>6.4);
    end;
    SavePlanet(g);
END;


Procedure checkcrash;
VAR
i,j:integer;
a,b,c,d:integer;
BEGIN
   if (Crash=False) then
   begin
     for i:=1 to numPlanets do
     begin
          if (dot.x>s[i].gx-(s[i].size div 2)) and (dot.x<s[i].gx+(s[i].size div 2))
          and(dot.y>s[i].gy-(s[i].size div 2)) and (dot.y<s[i].gy+(s[i].size div 2)) then
          begin
               a:=x-(s[i].gx)+(s[i].size div 2);
               c:=y-(s[i].gy)+(s[i].size div 2);
               LoadPlanet(i);
               if (simg[a][c]>0) then
               begin
                    Crash:=true;DoCrash(i);
               end;
          end;
     end;
   end;
END;

Procedure checkcrashplr;
VAR
i,j:integer;
a,b,c:integer;
d:real;
BEGIN
   if (Crash=False) then
   begin
     for i:=1 to numPlanets do
     begin
          if (plr[pnr].x>s[i].gx-(s[i].size div 2)) and (plr[pnr].x<s[i].gx+(s[i].size div 2))
          and(plr[pnr].y>s[i].gy-(s[i].size div 2)) and (plr[pnr].y<s[i].gy+(s[i].size div 2)) then
          begin
               a:=x-(s[i].gx)+(s[i].size div 2);
               c:=y-(s[i].gy)+(s[i].size div 2);
               LoadPlanet(i);
               if (simg[a][c]>0) then
               begin
                    Crash:=true;
                    plr[pnr].p:=i;
                    plr[pnr].pdir:=round(CalcDir(plr[pnr].x,plr[pnr].y,i));
               end;
          end;
     end;
   end;
END;

Procedure checkcrashcmp;
VAR
i,j:integer;
a,b,c,d:integer;
BEGIN
   if (Crash=False) then
   begin
     for i:=1 to numPlanets do
     begin
          if (dot.x>s[i].gx-(s[i].size div 2)) and (dot.x<s[i].gx+(s[i].size div 2))
          and(dot.y>s[i].gy-(s[i].size div 2)) and (dot.y<s[i].gy+(s[i].size div 2)) then
          begin
               a:=x-(s[i].gx)+(s[i].size div 2);
               c:=y-(s[i].gy)+(s[i].size div 2);
               LoadPlanet(i);
               if (simg[a][c]>0) then
               begin
                    Crash:=true;
               end;
          end;
     end;
   end;
END;

Procedure SetPosition;
VAR
j,i:integer;
fail:byte;
planet:integer;
posdeg:integer;
BEGIN
    repeat
     fail:=0;
         begin s[1].gx:=random(bx);s[1].gy:=random(by);s[1].g:=0.8;s[1].size:=100;     end;
         begin s[2].gx:=random(bx);s[2].gy:=random(by);s[2].g:=0.6;s[2].size:= 65;     end;
         begin s[3].gx:=random(bx);s[3].gy:=random(by);s[3].g:=0.4;s[3].size:= 55;     end;
         begin s[4].gx:=random(bx);s[4].gy:=random(by);s[4].g:=0.2;s[4].size:= 45;     end;
         begin s[5].gx:=random(bx);s[5].gy:=random(by);s[5].g:=0.8;s[5].size:=100;     end;
         begin s[6].gx:=random(bx);s[6].gy:=random(by);s[6].g:=0.6;s[6].size:= 65;     end;
         begin s[7].gx:=random(bx);s[7].gy:=random(by);s[7].g:=0.4;s[7].size:= 55;     end;
         begin s[8].gx:=random(bx);s[8].gy:=random(by);s[8].g:=0.2;s[8].size:= 45;     end;
         begin s[9].gx:=random(bx);s[9].gy:=random(by);s[9].g:=0.8;s[9].size:=100;     end;
         begin s[10].gx:=random(bx);s[10].gy:=random(by);s[10].g:=0.6;s[10].size:= 65; end;
         begin s[11].gx:=random(bx);s[11].gy:=random(by);s[11].g:=0.4;s[11].size:= 55; end;
         begin s[12].gx:=random(bx);s[12].gy:=random(by);s[12].g:=0.2;s[12].size:= 45; end;
         begin s[13].gx:=random(bx);s[13].gy:=random(by);s[13].g:=0.8;s[13].size:=100; end;
         begin s[14].gx:=random(bx);s[14].gy:=random(by);s[14].g:=0.6;s[14].size:= 65; end;
         begin s[15].gx:=random(bx);s[15].gy:=random(by);s[15].g:=0.4;s[15].size:= 55; end;
         begin s[16].gx:=random(bx);s[16].gy:=random(by);s[16].g:=0.2;s[16].size:= 45; end;
    for i:=1 to numPlayers do
    begin
    repeat
     inc(fail);
     if (fail=100) then break;
     planet := i;
     posdeg := random(360);
     plr[i].x  := cos(rad(posdeg)) * (s[planet].size div 2) + s[planet].gx;
     plr[i].y  := sin(rad(posdeg)) * (s[planet].size div 2) + s[planet].gy;
     plr[i].vx := 0;
     plr[i].vy := 0;
    until (plr[i].x>20) and (plr[i].x<bx-20) and (plr[i].y>20) and (plr[i].y<by-20);
    if (fail=100) then break;
    end;
    until (fail<100);
END;

Procedure Shooter;
VAR
i,j:integer;
BEGIN
     Crash:=false;
     repeat
     for i:=1 to 30 do
     begin
          movedot;
          x:=trunc(dot.x); y:=trunc(dot.y);
          checkcrash;
          if crash then break;
     end;
drawdot;
until crash;
END;

Procedure ShooterCmp;
VAR
i,j:integer;
BEGIN
     Crash:=false;
     repeat
     for i:=1 to 30 do
     begin
          movedot;
          x:=trunc(dot.x); y:=trunc(dot.y);
          checkcrashcmp;
          if crash then break;
     end;
until crash;
END;

Procedure FlyShip;
VAR
i,j:integer;
BEGIN
     Crash:=false;
     repeat
     for i:=1 to 30 do
     begin
          moveplr;
          x:=trunc(plr[pnr].x); y:=trunc(plr[pnr].y);
          checkcrashplr;
          if crash then break;
     end;
     drawplr2;
until crash;
END;

Procedure LookAround;
VAR
key1,key2,ch:char;
i:integer;
q:integer;
xScr,yScr:integer;
dx,dy:integer;
c:byte;
BEGIN
     xScr:=trunc(plr[pnr].x)-160;yScr:=trunc(plr[pnr].y)-100;
  repeat
     cls(vaddr,0);
     StarryNight;
     DrawBorder(xScr,yScr);
     for q:=1 to numPlanets do DrawPlanet(s[q].gx-xScr,s[q].gy-yScr,q);
     for j:=1 to numPlayers do for i:=0 to 5 do
         hline(trunc(plr[j].x)-xScr-3,trunc(plr[j].x)-xScr+3,trunc(plr[j].y)-yScr-3+i,plr[j].col,vaddr);
     flip(vaddr,vga);
    if keypressed then
    begin
     key := readkey;
     if (ord(key)=0) then
     begin
        key2 := readkey;
        case ord(key2) of
         72: if (yScr+100>0)  then yScr:=yScr-10;
         80: if (yScr+100<by) then yScr:=yScr+10;
         75: if (xScr+160>0)  then xScr:=xScr-10;
         77: if (XScr+160<bx) then xScr:=xScr+10;
        end;
     end;
     if (ord(key)=47) then exit;
    end;
    while keypressed do ch:=readkey;
  until (1=2)
END;

Procedure Findroute(stime:integer);
TYPE
fer=record
      dist:real;
      vel,dir:integer;
    end;
VAR
i,j,t:integer;
shotok:boolean;
tpnr:byte;
compdist:real;
distrcd:fer;
angmin,angmax,cdir:integer;
velmin,velmax     :integer;
cvel,v:real;
BEGIN
     angmin:=plr[pnr].pdir-90;
     angmax:=plr[pnr].pdir+90;
     velmin:=30;velmax:=100;
     cdir:=0; cvel:=0;
     distrcd.dist:=sqrt(720000);
     shotok:=FALSE;
     for t:=1 to stime do
     begin
          i:=random(velmax-velmin)+velmin;
          j:=random(angmax-angmin)+angmin;
              v:=i/300;
              dot.vx:=-cos(rad(j))*v;            dot.vy:=sin(rad(j))*v;
              dot.x :=plr[pnr].x+cos(rad(j))*10; dot.y :=plr[pnr].y+sin(rad(j))*10;
              Shootercmp;
             for tpnr:=1 to numPlayers do
             begin
              if (tpnr=pnr) then Continue;
              compdist:=0;
              compdist:=sqrt((dot.x-plr[tpnr].x)*(dot.x-plr[tpnr].x)+
                             (dot.y-plr[tpnr].y)*(dot.y-plr[tpnr].y));
              if (compdist<distrcd.dist) then
              begin
                   distrcd.dist:=compdist;
                   distrcd.vel :=i;
                   distrcd.dir :=j;
              end;
             end;
              drawplr(i,j);
              if (distrcd.dist<5) then begin shotok:=TRUE; break; end;
     end;
      if (distrcd.dist<500) then
      begin
        cvel:=distrcd.vel; cdir:=distrcd.dir;
        drawplr(round(cvel),cdir);
        cvel:=cvel/300;
        dot.vx:=-cos(rad(cdir))*cvel;         dot.vy:=sin(rad(cdir))*cvel;
        dot.x :=plr[pnr].x+cos(rad(cdir))*10; dot.y :=plr[pnr].y+sin(rad(cdir))*10;
        sound(500);delay(200);nosound;
        shooter;
        DecHealth(x,y,100);
      end else
      begin
        cvel:=(60+random(40))/300; cdir:=distrcd.dir;
        plr[pnr].vx:=-cos(rad(cdir))*cvel;             plr[pnr].vy:=sin(rad(cdir))*cvel;
        plr[pnr].x :=plr[pnr].x+cos(rad(cdir))*10;  plr[pnr].y :=plr[pnr].y+sin(rad(cdir))*10;
        delay(5000);
        FlyShip;
      end;
END;

Procedure StartTurn;
VAR
key,key2,c:char;
vel,dir :integer;
v:real;
beurt:byte;
BEGIN
vel:=50;dir:=50;
beurt:=1;
repeat
 pnr:=beurt;
 DrawPlr(vel,dir);
 case plr[pnr].id of
 0:
 begin
  if keypressed then
  begin
   key := readkey;
   if (ord(key)=0) then
   begin
        key2 := readkey;
        case ord(key2) of
         72: if (vel<100) then inc(vel);
         80: if (vel>  0) then dec(vel);
         75: if (dir<359) then dir:=dir+2 else dir:=0;
         77: if (dir>0)   then dir:=dir-2 else dir:=359;
        end;
   end;
   if (ord(key)=13) then
   begin
        v:=vel/300;
        dot.vx:=-cos(rad(dir))*v;         dot.vy:=sin(rad(dir))*v;
        dot.x :=plr[pnr].x+cos(rad(dir))*10;  dot.y :=plr[pnr].y+sin(rad(dir))*10;
        Shooter;
        DecHealth(x,y,100);
        delay(5000);
        plr[pnr].vx:=0;plr[pnr].vy:=0;
        for pnr:=1 to numPlayers do FlyShip;
        inc(beurt);if (beurt>numPlayers) then beurt:=1;
   end;
   if (ord(key)=32) then
   begin
        v:=vel/300;
        plr[pnr].vx:=-cos(rad(dir))*v;             plr[pnr].vy:=sin(rad(dir))*v;
        plr[pnr].x :=plr[pnr].x+cos(rad(dir))*10;  plr[pnr].y :=plr[pnr].y+sin(rad(dir))*10;
        delay(5000);
        FlyShip;
        inc(beurt);if (beurt>numPlayers) then beurt:=1;
   end;
   if (ord(key)=47) then
   begin
        LookAround;
   end;
  end;
  while keypressed do c:=readkey;
 end;
 1..100:
 begin
        FindRoute(plr[pnr].id);
        delay(10000);
        plr[pnr].vx:=0;plr[pnr].vy:=0;
        for pnr:=1 to numPlayers do FlyShip;
        inc(beurt);if (beurt>numPlayers) then beurt:=1;
 end;
 end;
until (ord(key)=27);
END;

Procedure StoryTime;
var
text: array[1..43] of string[50];
ch    :char;
lines: byte;
i,j:integer;
BEGIN
     lines:=42;
     text[ 1]:='the story';
     text[ 2]:='';
     text[ 3]:='the year is 1998.';
     text[ 4]:='a humongous asteroid is heading for our precious';
     text[ 5]:='little earth. if you have seen the god knows why';
     text[ 6]:='blockbuster movies deep impact and armageddon you';
     text[ 7]:='kinda know the story. except now the president of';
     text[ 8]:='the us of a wasn`t so concerned with his people.';
     text[ 9]:='he gave nasa the orders to create a hyperengine';
     text[10]:='driven spaceship to make a brand new start on a';
     text[11]:='different planet. just before fox mulder could';
     text[12]:='discover this sceem, mr clinton took off with his';
     text[13]:='closest friends such as al gore, ross perot and';
     text[14]:='of course miss jones and lewinsky leaving hilary';
     text[15]:='and the rest of america with no clue behind.';
     text[16]:='';
     text[17]:='at the same time mother russia overspied the usa';
     text[18]:='and jeltsin created a vodka-driven spacemachine.';
     text[19]:='even saddam hussein has prepared himself by';
     text[20]:='creating a kurd-driven apparatus in the un-free';
     text[21]:='factories.';
     text[22]:='the last escapists were prince willem-alexander';
     text[23]:='of the netherlands and his maybe soon to became';
     text[24]:='wife emily.';
     text[25]:='';
     text[26]:='a few hours before impact the ships left earth';
     text[27]:='to let mankind survive. two hours later all life';
     text[28]:='on earth was scorched or drowned. because of the';
     text[29]:='impact the earth started spinning, solar winds';
     text[30]:='were generated and the four ships were pulled by';
     text[31]:='an antigravity protonflux field which opened a';
     text[32]:='a temporary timespace gate. this gate changed the';
     text[33]:='people inside the ships. the prince was replaced';
     text[34]:='by thepudge from pudgcom, clinton by elvis,';
     text[35]:='jeltsin by stalin and saddam by jan null';
     text[36]:='';
     text[37]:='it was unfortunate that they all ended up in the';
     text[38]:='same solar system and or course only one may';
     text[39]:='survive even if whole planets would be destroyed.';
     text[40]:='';
     text[41]:='                      ,';
     text[42]:='welcome to alien cliche';

     for i:=200 downto -350 do
     begin
          cls(vaddr,0);
          for j:=1 to lines do
          begin
               if (i+j*8<-10) then continue;
               if (i+j*8>200) then continue;
               cwritesml(-1,i+j*8,text[j],90);
          end;
          flip(vaddr,vga);delay(500);if keypressed then begin ch:=readkey; exit; end;
     end;
END;


BEGIN
clrscr;
randomize;
numPlanets:=8;
numPlayers:=2;
for i:=1 to numPlayers do plr[i].hlth:=100;
plr[1].name:='ThePudge'; plr[1].id:=0;   plr[1].col:=110;
plr[2].name:='Elvis';    plr[2].id:=5;   plr[2].col:=112;
plr[3].name:='Stalin';   plr[3].id:=0;   plr[3].col:=111;
plr[4].name:='Jan Null'; plr[4].id:=0;   plr[4].col:=113;

bx:=600; by:=600;

Assign(f,'dat.pas');Rewrite(f);

InitCharSets;
SetVGA;
SetUpVirtual;
Cls(Vaddr,0);
Planets;
creatergbpalette;
SetPosition;
setpal(1,63,63,63);
StoryTime;
repeat
for pnr:=1 to numPlayers do FlyShip;
StartTurn;
halt;
{until crash;}
{if crash then DoCrash(c);}
until keypressed;
{fadeup;}
ShutDown;
SetText;

END.</code></pre>