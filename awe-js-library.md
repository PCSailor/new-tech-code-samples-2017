Awe.js is a JavaScript library to create an augmented reality experience on the mobile web.
It uses the Three.js API, which is a device’s camera and some smart techniques to create augmented reality in the browser.
Create a 3D control board that opens on top of a paper marker and hook it up to do pretty much anything that can be enabled via a JavaScript HTTP request, set up to change the color of a LIFX lightbulb using IFTTT.

You can download the library and some samples on the awe.js GitHub repo. It provides four different sorts of AR experiences, each with their own example in the repo:

geo_ar – Allows you to place objects at set compass points.
grift_ar – Compatible with an Oculus Rift.
leap_ar – Integrates with the Leap Motion controller.
marker_ar – Allows you to create an experience that is positioned on Augmented Reality markers.

The demo code is over 300 lines long, but a lot is repeated code for similar objects.  Everything starts within the load event on our window. The first thing included is a variable to track whether the AR control panel (called “menu”) is open or not. Initially, it is closed.

https://www.sitepoint.com/augmented-reality-in-the-browser-with-awe-js/
https://github.com/sitepoint-editors/ARLIFXController

Augmented Reality APIs are Here
http://www.htmlgoodies.com/html5/javascript/augmented-reality-apis-are-here.html#fbid=aupxxtfAN54
