# Video Call App

A peer-to-peer video calling application built with Next.js, WebRTC, Pusher, and Metered TURN servers. Works across different networks.

## Live Demo

🔗 [video-call-webrtc.vercel.app](https://video-call-webrtc.vercel.app)

## Features

- Create or join video call rooms with unique codes
- Real-time peer-to-peer video/audio streaming
- Works across different networks (NAT traversal with TURN)
- Mute/unmute audio
- Toggle video on/off
- Copy room link to share
- Modern, responsive UI with Tailwind CSS

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Pusher (Required for signaling)

1. Go to [pusher.com](https://pusher.com) and create a free account
2. Create a new Channels app
3. Go to App Keys and copy your credentials

### 3. Configure Metered TURN Server (Required for cross-network calls)

1. Go to [metered.ca](https://www.metered.ca/stun-turn) and create a free account
2. Create a new app and generate TURN credentials
3. Update the `ICE_SERVERS` config in `pages/room/[roomId].js` with your credentials

### 4. Environment Variables

Create a `.env.local` file in the project root:

```env
PUSHER_APP_ID=your_app_id
PUSHER_KEY=your_key
PUSHER_SECRET=your_secret
PUSHER_CLUSTER=your_cluster

NEXT_PUBLIC_PUSHER_KEY=your_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_cluster
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add the environment variables in Vercel's project settings
4. Deploy!

## How It Works

1. **Create a Room**: Click "Create New Room" to generate a unique room code
2. **Share the Link**: Copy the room link and send it to the person you want to call
3. **Connect**: When both users are in the room, the video call starts automatically

## Architecture

- **Signaling**: Pusher Channels handles the WebRTC signaling (offer/answer/ICE candidates exchange)
- **STUN**: Google STUN servers for NAT discovery
- **TURN**: Metered TURN servers for relay when direct connection fails
- **Media**: WebRTC handles peer-to-peer video/audio streaming

## Tech Stack

- **Next.js 14** - React framework
- **WebRTC** - Peer-to-peer video/audio
- **Pusher Channels** - Real-time signaling
- **Metered** - TURN server for NAT traversal
- **Tailwind CSS** - Styling
- **Vercel** - Deployment

## Limits

- Metered free tier: 500MB/month (~100-150 minutes of video calls through TURN)
- Direct peer-to-peer connections don't count against this limit
