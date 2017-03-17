JSARToolKit
JavaScript port of FLARToolKit that renders a 3D model on top of an augmented reality marker in webcam video. At this time, JSARToolKit operates specifically on canvas images and videos played on a canvas.

JSARToolKit accepts a canvas element, analyses its contents, and returns a list of AR markers found in the image and the corresponding transformation matrices. To draw a 3D object on top of a marker, you pass the transformation matrix to whatever 3D rendering library you're using so that your object is transformed using the matrix. Finally, WebGL is employed to draw the video frame on the canvas, along with the superimposed object. WebGL is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins.

To analyze video using the JSARToolKit, you have to draw each video frame on the canvas, then pass the canvas to JSARToolKit. It takes a lot of processing power, but JSARToolKit is fast enough on modern JavaScript engines to do this in realtime even on 640x480 video frames. However, the larger the video frame, the longer it takes to process. The makers of JSARToolKit recommend a video frame size of 320x240, or 640x480 if you expect to use small or multiple markers.

https://www.html5rocks.com/en/tutorials/webgl/jsartoolkit_webrtc/
https://www.html5rocks.com/en/tutorials/getusermedia/intro/
https://github.com/kig/JSARToolKit/
https://github.com/kig/magi/
https://github.com/mrdoob/three.js/
