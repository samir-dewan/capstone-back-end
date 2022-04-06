/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
let attendeesData = require("../seed_data/attendees");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      return knex("attendees").insert(attendeesData);
    })
};
