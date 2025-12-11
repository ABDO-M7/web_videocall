import Pusher from 'pusher'

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
})

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { socket_id, channel_name } = req.body

  try {
    const authResponse = pusher.authorizeChannel(socket_id, channel_name)
    res.status(200).json(authResponse)
  } catch (error) {
    console.error('Pusher auth error:', error)
    res.status(403).json({ error: 'Forbidden' })
  }
}
