// NOTE: HTML:  STILL ACTIVE TAGS?
<input type="file" accept="image/*;capture=camera">
<input type="file" accept="video/*;capture=camcorder">
<input type="file" accept="audio/*;capture=microphone">
// NOTE: FAILED ATTEMPT: no released browser ever included <device>
<device type="media" onchange="update(this.data)"></device>
<video autoplay></video>
<script>
  function update(stream) {
    document.querySelector('video').src = stream.url;
  }
</script>
// NOTE: WebRTC
function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}
if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert('getUserMedia() is not supported in your browser');
}
// NOTE:  Modernizr to detect getUserMedia to avoid the vendor prefix
if (Modernizr.getusermedia){
  var gUM = Modernizr.prefixed('getUserMedia', navigator);
  gUM({video: true}, function( //...
  //...
}
// NOTE: Gaining access to an input device
<video autoplay></video>
<script>
  var errorCallback = function(e) {
    console.log('Reeeejected!', e);
  };
  // Not showing vendor prefixes.
  navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);
    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function(e) {
      // Ready to go. Do some stuff.
    };
  }, errorCallback);
</script>
// NOTE: something that works cross-browser:
navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

var video = document.querySelector('video');
if (navigator.getUserMedia) {
  navigator.getUserMedia({audio: true, video: true}, function(stream) {
    video.src = window.URL.createObjectURL(stream);
  }, errorCallback);
} else {
  video.src = 'somevideo.webm'; // fallback.
}
// NOTE: require the stream to be HD
var hdConstraints = {
  video: {
    mandatory: {
      minWidth: 1280,
      minHeight: 720
    }
  }
};
navigator.getUserMedia(hdConstraints, successCallback, errorCallback);
// ...
var vgaConstraints = {
  video: {
    mandatory: {
      maxWidth: 640,
      maxHeight: 360
    }
  }
};
navigator.getUserMedia(vgaConstraints, successCallback, errorCallback);
// NOTE: the last microphone and camera found is selected as the media stream source
MediaStreamTrack.getSources(function(sourceInfos) {
  var audioSource = null;
  var videoSource = null;
  for (var i = 0; i != sourceInfos.length; ++i) {
    var sourceInfo = sourceInfos[i];
    if (sourceInfo.kind === 'audio') {
      console.log(sourceInfo.id, sourceInfo.label || 'microphone');
      audioSource = sourceInfo.id;
    } else if (sourceInfo.kind === 'video') {
      console.log(sourceInfo.id, sourceInfo.label || 'camera');
      videoSource = sourceInfo.id;
    } else {
      console.log('Some other kind of source: ', sourceInfo);
    }
  }
  sourceSelected(audioSource, videoSource);
});
function sourceSelected(audioSource, videoSource) {
  var constraints = {
    audio: {
      optional: [{sourceId: audioSource}]
    },
    video: {
      optional: [{sourceId: videoSource}]
    }
  };
  navigator.getUserMedia(constraints, successCallback, errorCallback);
}
// NOTE: CSS Filters
<style>
video {
  width: 307px;
  height: 250px;
  background: rgba(255,255,255,0.5);
  border: 1px solid #ccc;
}
.grayscale {
  +filter: grayscale(1);
}
.sepia {
  +filter: sepia(1);
}
.blur {
  +filter: blur(3px);
}
// ...
</style>
<video autoplay></video>
<script>
var idx = 0;
var filters = ['grayscale', 'sepia', 'blur', 'brightness',
               'contrast', 'hue-rotate', 'hue-rotate2',
               'hue-rotate3', 'saturate', 'invert', ''];
function changeFilter(e) {
  var el = e.target;
  el.className = '';
  var effect = filters[idx++ % filters.length]; // loop through filters.
  if (effect) {
    el.classList.add(effect);
  }
}
document.querySelector('video').addEventListener(
    'click', changeFilter, false);
</script>
