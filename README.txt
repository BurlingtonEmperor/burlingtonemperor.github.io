Pinewood Chapel!

This website won't run properly when set up outside of Github Pages thanks to its unique file system.
To make it work you have to change the file paths from ../exampleFolder/ to /exampleFolder/, etc.
Some of it should be through the commonImagePath in variables.js, but much of it will have to be done piecemeal.

Additionally, things like the file viewer that have API security restrictions won't work either...you'll have to make your own versions.
Some of the website's other functions such as the building photo viewer, Pano-Visor and the guestbook aren't part of this repository (the links to which can be found in src_bundle.html).

I'm not sure what anyone would use this for (if anything at all), but maybe it can serve as a template for your own archive.
It has some glaring flaws that can be fixed by anyone with a smidge of web-dev know-how.
You can use less CSS files, lazy-load images, etc. 

Someone could really make this into something special.

Libraries Used:
JQuery
ThreeJS
98.css
NodeJS (Guestbook)