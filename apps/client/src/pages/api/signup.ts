// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {Admin} from "db/index"
import jwt from "jsonwebtoken"
const SECRET="SECRET";

type Data = {
  token?: string;
  message?:String;
  name?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username, password } = req.body;
  const admin = await Admin.findOne({username});

  function callback(admin:any) {
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const obj = { username: username, password: password };
      const newAdmin = new Admin(obj);
      newAdmin.save();

      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }

  }
  Admin.findOne({ username }).then(callback);
}
