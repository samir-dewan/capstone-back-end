/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let interestsData = require("../seed_data/interests");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("interests").del();
  await knex("interests").insert(interestsData);
};