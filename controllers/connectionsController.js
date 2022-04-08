const knex = require("knex")(require("../knexfile"));

exports.getPendingConnections = async (req, res) => {
  console.log(req.params.personID);
  try {
    const data = await knex("connections")
      .select("*")
      .where({ personID_2: req.params.personID })
      .orWhere({ personID_1: req.params.personID });
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
    return res.status(400).send("No personID found.");
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

exports.acceptConnection = async (req, res) => {
  const query = await knex("connections").update({status: "accepted"}).where({ personID_2: req.params.id });

  console.log(query.toString());
  try {
    await query;
    res.status(200).send(`Connection with id: ${req.params.id} has been updated`)
  }
  catch {(err) =>
      res.status(400).send(`Error updating Connection ${req.params.id} ${err}`)
  };
};