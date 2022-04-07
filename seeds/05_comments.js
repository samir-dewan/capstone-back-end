/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let commentsData = require("../seed_data/comments");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex("comments").insert(commentsData);
};
