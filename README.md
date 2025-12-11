# Video Call App

A simple peer-to-peer video calling application built with Next.js, WebRTC, and Pusher.

## Features

- Create or join video call rooms
- Real-time peer-to-peer video/audio streaming
- Mute/unmute audio
- Toggle video on/off
- Copy room link to share
- Modern, responsive UI

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Pusher (Required for signaling)

1. Go to [pusher.com](https://pusher.com) and create a free account
2. Create a new Channels app
3. Go to App Keys and copy your credentials
4. Create a `.env.local` file in the project root:

```env
PUSHER_APP_ID=your_app_id
PUSHER_KEY=your_key
PUSHER_SECRET=your_secret
PUSHER_CLUSTER=your_cluster

NEXT_PUBLIC_PUSHER_KEY=your_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_cluster
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add the environment variables in Vercel's project settings
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## How It Works

1. **Create a Room**: Click "Create New Room" to generate a unique room code
2. **Share the Link**: Copy the room link and send it to the person you want to call
3. **Connect**: When both users are in the room, the video call starts automatically

## Tech Stack

- **Next.js** - React framework
- **WebRTC** - Peer-to-peer video/audio
- **Pusher Channels** - Real-time signaling
- **Tailwind CSS** - Styling
