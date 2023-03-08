import { getUsers } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await getUsers();
  //if (users.find((user) => user.id === req.session.id)?.isAdmin) {
    res.status(200).json(users);
}
