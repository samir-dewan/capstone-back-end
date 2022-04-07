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
        .where({personID: req.body.personID});
        res.status(200).json(data);
    }
    catch {
        res.status(400).send(`Error finding person with ID ${req.body.personID}`)
    }
};