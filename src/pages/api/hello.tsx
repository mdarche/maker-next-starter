import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Example API route for a GET request
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      /** Get request body */
      const { data } = JSON.parse(req.body)

      /** Add logic and async API request functions here */

      res.status(200).json({ data })
    } catch (error) {
      res.status(500).json({ error })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
