/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
let peopleData = require("../seed_data/people");


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('people').del()
  await knex("people").insert(peopleData);
};
