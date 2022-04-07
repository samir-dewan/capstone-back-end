/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let attendeesData = require("../seed_data/attendees");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("attendees").del();
  await knex("attendees").insert(attendeesData);
};