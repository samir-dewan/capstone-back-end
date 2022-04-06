const knex = require("knex")(require("../knexfile"));

exports.getChatroomsForID = async (req, res) => {
  try {
    const data = await knex("chatrooms")
      .select("*")
      .where({ personID: req.params.personID });
    res.status(200).json(data);
  } catch {
    res
      .status(400)
      .send(`Error retrieving chatroom with event ID ${req.params.personID}`);
  }
};

exports.postChatroomForID = async (req, res) => {
  if (!req.body.chatroomName || !req.body.people) {
    return res.status(400).send("No chatroom name has been given.");
  }

  try {
    const data = await knex("chatrooms")
      .returning(["chatroomName", "people"])
      .insert(req.body);
    res.status(201).json({ newChatroom: data });
  } catch {
    res.status(401).send(`Error creating Chatroom.`);
  }
};
