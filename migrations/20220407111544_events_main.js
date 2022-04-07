exports.up = function (knex) {
  return knex.schema
    .createTable("events", (t) => {
      t.increments("eventID").primary();
      t.string("name").notNullable();
      t.string("location").notNullable();
      t.string("postcode").notNullable();
      t.timestamp("time").notNullable();
      t.string("description");
      t.specificType("photo", "blob");
      t.string("personID");
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("events");
};
