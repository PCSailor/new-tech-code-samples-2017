JSARToolKit
JavaScript FLARToolKit renders a 3D model on top of an augmented reality marker in a webcam video. It operates on canvas images and videos played over a canvas.
WebGL is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins.
--
To analyze video using a JSARToolKit, draw each video frame on the canvas, then pass the canvas to JSARToolKit.
JSARToolKit accepts a canvas element, analyses content, and returns a list of AR markers found.
On top of a marker, draw a 3D object by passing the transformation matrix to a 3D rendering library you're using.
Your object is transformed using the matrix.
WebGL is now used to draw the video frame on the canvas, along with the superimposed object.
--
 It takes a lot of processing power, but JSARToolKit is fast enough on modern JavaScript engines to do this in realtime even on 640x480 video frames.
 The larger the video frame, the longer it takes to process. JSARToolKit recommends video frame sizes of 320x240, or 640x480 using small or multiple markers.
--
https://www.html5rocks.com/en/tutorials/webgl/jsartoolkit_webrtc/
https://www.html5rocks.com/en/tutorials/getusermedia/intro/
https://github.com/kig/JSARToolKit/
https://github.com/kig/magi/
https://github.com/mrdoob/three.js/
