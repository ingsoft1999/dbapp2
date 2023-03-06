// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/libs/client'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const usersWithPosts = await client.user.findMany({
    include: {
      posts: true,
    },
  })
  console.log('usersWithPosts', usersWithPosts);
  //res.json(usersWithPosts)
  res.status(200).json(usersWithPosts)
}
