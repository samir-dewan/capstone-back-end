// import seed data files, arrays of objects
const attendeesData = require("../seed_data/attendees");
const chatroomsData = require("../seed_data/chatrooms");
const commentsData = require("../seed_data/comments");
const connectionsData = require("../seed_data/connections");
const eventsData = require("../seed_data/events");
const peopleData = require("../seed_data/people");

exports.seed = function (knex) {
  return knex("attendees").del()
    .then(function () {
      return knex("attendees").insert(attendeesData);
    })
};
