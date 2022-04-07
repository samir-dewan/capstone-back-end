exports.up = function (knex) {
  return knex.schema
    .createTable("attendees", (t) => {
      t.increments("attendeeID").primary();
      t.integer("eventID")
        .unsigned()
        .notNullable()
        .references("eventID")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("personID")
        .unsigned()
        .notNullable()
        .references("personID")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.string("status").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("attendees");
};
