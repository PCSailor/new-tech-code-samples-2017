HTML5-Capturing-Audio-Video:
This approach is based on navigator.mediaDevices.getUserMedia() API
With the navigator API you can tap into your webcam and microphone inputs without any additional plugins.
Another words, audio-video access is now a HTML call away, with nothing to install because it's baked into the browser.

Gaining input device access:
getUserMedia() supports selecting the the video/audio source using the MediaStreamTrack.getSources() API.
In the code example, the last microphone and camera that's found will be selected as the media streaming source.
To use the webcam and microphone, request permission.
First parameter for getUserMedia() is an object specifying the details and requirements for each type of media you want to access.
To access the webcam, the first parameter should be {video: true}, to use both the microphone and camera, pass {video: true, audio: true}

Media capture is an example of new HTML5 APIs working together, in conjunction with <audio> and <video> elements.

Instead of feeding the video a URL to a media file, feed it a Blob URL obtained from a LocalMediaStream object representing the webcam, No src attribute nor needing to iclude <source> elements on the <video> element.

The <video> must be set to autoplay, or it will freeze on the first frame.
Also able to add expected a/v controls directly onto the video.

Setting media constraints (resolution, height, width):
getUserMedia() parameters can be used to specify more requirements or constraints on the media stream.
Instead of indicating basic access to video (e.g. {video: true}), require the stream to be HD.

CSS Filters
Using CSS Filters, there is the ability for good effects to video as it is captured.

Conclusion
Current problem is that the web's security model is very different from the our world. For example, we don't want every web site to have random access to our video camera.
getUserMedia() is in the first wave of access to new types of devices.
Hope we'll continue to see more in the near future!



https://www.html5rocks.com/en/tutorials/getusermedia/intro/
https://www.html5rocks.com/en/tutorials/getusermedia/intro/
http://www.w3.org/2009/dap/
http://dev.w3.org/2009/dap/camera/
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
https://modernizr.com/
https://simpl.info/getusermedia/sources/
