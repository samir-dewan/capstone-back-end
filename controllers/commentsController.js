const knex = require("knex")(require("../knexfile"));

exports.getCommentsFromRoom = async (req, res) => {
  try {
    const data = await knex("comments")
      .select("*")
      .where({ chatroomID: req.params.chatroomID });
    res.status(200).json(data);
  } catch {
    res
      .status(400)
      .send(
        `Error retrieving comments with chatroom ID ${req.params.chatroomID}`
      );
  }
};

exports.postComment = async (req, res) => {
  if (!req.body.comment || !req.body.personID || !req.body.chatroomID) {
    return res
      .status(400)
      .send("No comment, personID, or chatroomID was given.");
  }

  try {
    const data = await knex("comments")
      .returning(["comment", "personID", "chatroomID"])
      .insert(req.body);
    res.status(201).json({ newComment: data });
  } catch {
    res.status(401).send(`Error creating comment.`);
  }
};
