import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { isInputInvalid } from "../../lib/posts-util";
import { TContactDetails } from "../../types/types";

const uri =
  "mongodb+srv://blog:henero1234@cluster0.vvsfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, name, message }: TContactDetails = req.body;

    const newMessage = {
      email,
      name,
      message,
    };

    if (isInputInvalid(newMessage)) {
      res.status(422).send({ message: "Invalid input" });
      return;
    }

    try {
      const client = await MongoClient.connect(uri);
      const db = client.db("myFirstDatabase");
      const collection = db.collection("messages");
      await collection.insertOne(newMessage);
      res.status(201).send({ message: "Message sent" });
      client.close();
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
}

export default handler;
