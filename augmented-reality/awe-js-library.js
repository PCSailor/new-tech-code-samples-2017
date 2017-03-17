// NOTE: aimed at camera-equipped-mobile-devices because they have to analyze each frame to detect markers, and compute the marker's position in the reconstructed 3D world. The original video is then rendered with overlaid synthetic 3D objects.
// NOTE: AR development in JavaScript is largely thanks to the WebRTC getUserMedia device API specification, a set of JavaScript APIs for Real Time Communication.
// NOTE: In awe.js, everything is defined within the global window.awe.init() function:
window.awe.init({
  device_type: awe.AUTO_DETECT_DEVICE_TYPE,
  settings: {
    //...
  },
});
// NOTE: There is a settings property, as well as the ready() and success() events. The former calls awe.util.require() to import required modules, while the latter calls window.awe.setup_scene(). Each awe.js application consists of a 3D scene into which we add points of interest or "pois". Each poi marks out a point in space that is important or useful to us. This can be the location of an object or it might be a point where a recognized object or marker is currently positioned. Then you can attach different types of media (e.g. 3D objects, videos, images and sounds) to each poi called projections.
window.awe.init({
  device_type: awe.AUTO_DETECT_DEVICE_TYPE,
  settings: {
    //...
  },
  ready: function() {
    awe.util.require([{
      //...
    }])
  },
  success: function() {
    window.awe.setup_scene();
    //...
  }
});
// NOTE:  To add an object (point of interest) into your scene just call:
awe.pois.add({ id: 'my_poi' });
