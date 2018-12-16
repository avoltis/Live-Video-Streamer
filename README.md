# Live Video Streamer Client and API

Create and stream videos with a react redux web app

# Install OBS software
`https://obsproject.com/`

Install the setup and configure video and audio input on it. 
Record some video with audio to test it.

# Start the web app
In all 3 project directories API, rtmpserver and client project make sure you run:

`npm install`

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view client in the browser.
Open http://localhost:3001/streams to view api in the browser.

# Configure  OBS to live stream from your pc
Open OBS On Settings select stream , custom streaming server

URL: rtmp://localhost/live
Stream key: 1   (or whatever http://localhost:3000/streams/4   id you are looking at the client page after /streams)

Start streaming and you should see your pc streaming on the client live

