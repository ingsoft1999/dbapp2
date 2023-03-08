import { getUsers } from "../../../lib/db";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await getUsers();
  //if (users.find((user) => user.id === req.session.id)?.isAdmin) {
    res.status(200).json(users);
}
/*
export default withSessionRoute(async (req, res) => {
  const users = await getUsers();
  //if (users.find((user) => user.id === req.session.id)?.isAdmin) {
    res.status(200).json(users);
  //  return;
  //}
  //res.status(401).send("");
});
*/