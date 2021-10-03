import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).send({ message: "Invalid input" });
      return;
    }
    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    const uri =
      "mongodb+srv://blog:henero1234@cluster0.vvsfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
