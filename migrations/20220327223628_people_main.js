exports.up = function (knex) {
  return knex.schema
  .createTable('people', (table) => {
      table.increments('personID').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('nationality').notNullable();
      table.string('townOfOrigin').notNullable();
      table.string('addressOfOrigin').notNullable();
      table.specificType('photo', 'blob');
      table.string('email').notNullable();
      table.json('interests').notNullable();
      table.timestamp('birthday').notNullable();
      table.string('description');
      table.string('address').notNullable();
      table.timestamp('lastLogin').defaultTo(knex.fn.now());
      table.timestamp('createdAt').notNullable();
  })
  .createTable('connections', (t) => {
      t.increments('connectionID').primary();
      t.integer('personID_1').unsigned().notNullable().references('people.personID').onUpdate('CASCADE').onDelete('CASCADE');
      t.integer('personID_2').unsigned().notNullable().references('people.personID').onUpdate('CASCADE').onDelete('CASCADE');
      t.string('status').notNullable();
  })
  .createTable('chatrooms', (t) => {
      t.increments('chatroomID').primary();
      t.string('chatroomName').notNullable();
  })
  .createTable('comments', (t) => {
      t.increments('commentID').primary();
      t.integer('chatroomID').unsigned().notNullable().references('chatroomID').inTable('chatrooms').onUpdate('CASCADE').onDelete('CASCADE');
      t.integer('personID').unsigned().notNullable().references('personID').inTable('people').onUpdate('CASCADE').onDelete('CASCADE');
      t.string('comment').notNullable();
      t.timestamp('postTime').notNullable();
  })
  .createTable('events', (t) => {
      t.increments('eventID').primary();
      t.string('name').notNullable();
      t.string('location').notNullable();
      t.string('postcode').notNullable();
      t.timestamp('time').notNullable();
      t.string('description');
      t.specificType('photo', 'blob');
      t.string('personID');
  })
  .createTable('attendees', (t) => {
      t.increments('attendeeID').primary();
      t.integer('eventID').unsigned().notNullable().references('eventID').inTable('events').onUpdate('CASCADE').onDelete('CASCADE');
      t.integer('personID').unsigned().notNullable().references('personID').inTable('people').onUpdate('CASCADE').onDelete('CASCADE');
      t.string('status').notNullable();
    })
};

exports.down = function(knex) {

}