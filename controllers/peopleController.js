const knex = require("knex")(require("../knexfile"));

exports.getPeople = async (req, res) => {
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
};