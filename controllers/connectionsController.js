const knex = require("knex")(require("../knexfile").development);

exports.getPendingConnections = async (req, res) => {
  try {
    const data = await knex("connections")
      .select("*")
      .where({ personID_2: req.params.personID });
    res.status(200).json(data);
  } catch {
    res
      .status(400)
      .send(
        `Error retrieving connections with person ID ${req.params.personID}`
      );
  }
};

exports.sendConnection = async (req, res) => {
  if (!req.body.personID) {
    return res
      .status(400)
      .send("No personID found.");
  }

  try {
    const data = await knex("connections")
      .returning(["personID"])
      .insert(req.body);
    res.status(201).json({ newConnection: data });
  } catch {
    res.status(401).send(`Error creating connection.`);
  }
};

