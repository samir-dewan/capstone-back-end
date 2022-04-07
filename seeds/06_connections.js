/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let connectionsData = require("../seed_data/connections");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("connections").del();
  await knex("connections").insert(connectionsData);
};
