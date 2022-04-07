/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let chatroomsData = require("../seed_data/chatrooms");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("chatrooms").del();
  await knex("chatrooms").insert(chatroomsData);
};