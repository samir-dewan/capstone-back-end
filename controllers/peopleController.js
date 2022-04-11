const knex = require("knex")(require("../knexfile"));

exports.getPeople = async (_req, res) => {
  try {
    const data = await knex("people")
      .select("*")
    res.status(200).json(data);
  } catch {
    res
      .status(400)
      .send(
        `Error retrieving people.`
      );
  }
}

exports.findPersonByID = async (req, res) => {
    try {
        const data = await knex("people")
        .select("*")
        .where({personID: req.params.personID});
        res.status(200).json(data);
    }
    catch {
        res.status(400).send(`Error finding person with ID ${req.body.personID}`)
    }
};

exports.getPeopleByOutgoingConnectionID = async (req, res) => {
  try {
    const id = req.params.personID
    console.log(id)
    const data = await knex("people")
    .join("connections", "connections.peopleID_1", "=", "people.peopleID")
    .select("*")
    .where("people.personID", {id});
    res.status(200).json(data);
  }
  catch {
    res.status(400).send(`Error finding person with ID ${req.body.personID}`)
  }
}

exports.getPeopleByIncomingConnectionID = async (req, res) => {
  try {
    const data = await knex("people")
      .join("connections", "connections.peopleID_2", "=", "people.peopleID")
      .select("*");
    res.status(200).json(data);
  } 
  catch {
    res.status(400).send(`Error finding person with ID ${req.body.personID}`);
  }
}