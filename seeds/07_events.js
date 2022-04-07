/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let eventsData = require("../seed_data/events");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("events").del();
  await knex("events").insert(eventsData);
};
