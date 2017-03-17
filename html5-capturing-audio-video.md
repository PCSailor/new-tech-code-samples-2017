https://www.html5rocks.com/en/tutorials/getusermedia/intro/
http://www.w3.org/2009/dap/
http://dev.w3.org/2009/dap/camera/

Now based on navigator.mediaDevices.getUserMedia() API
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
With navigator.getUserMedia(), tap into webcam and microphone input without a plugin.
Camera access is now a call away, not an install away, as it's baked directly into the browser.

https://modernizr.com/

Gaining access to an input device
To use the webcam or microphone, we need to request permission. The first parameter to getUserMedia() is an object specifying the details and requirements for each type of media you want to access. For example, if you want to access the webcam, the first parameter should be {video: true}. To use both the microphone and camera, pass {video: true, audio: true}:
Media capture is a perfect example of new HTML5 APIs working together. It works in conjunction with our other HTML5 buddies, <audio> and <video>. Notice that we're not setting a src attribute or including <source> elements on the <video> element. Instead of feeding the video a URL to a media file, we're feeding it a Blob URL obtained from a LocalMediaStream object representing the webcam.
Tell the <video> to autoplay, otherwise it would be frozen on the first frame.
Adding controls also works as expected.

Setting media constraints (resolution, height, width)
The first parameter to getUserMedia() can also be used to specify more requirements (or constraints) on the returned media stream. For example, instead of just indicating you want basic access to video (e.g. {video: true}), you can additionally require the stream to be HD.

Selecting a media source
In Chrome 30 or later, getUserMedia() also supports selecting the the video/audio source using the MediaStreamTrack.getSources() API.
Check out Sam Dutton's great demo of how to let users select the media source:
https://simpl.info/getusermedia/sources/
In the code example, the last microphone and camera that's found is selected as the media stream source

CSS Filters
Using CSS Filters, we can apply some gnarly effects to the <video> as it is captured.

Conclusion
The real problem is that the web's security model is very different from the native world. For example, I probably don't want every Joe Shmoe web site to have random access to my video camera. It's a tough problem to get right.
getUserMedia() is in the first wave of access to new types of devices.
Hope we'll continue to see more in the near future!
https://www.html5rocks.com/en/tutorials/getusermedia/intro/
