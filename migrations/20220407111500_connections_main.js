exports.up = function (knex) {
  return knex.schema
    .createTable("connections", (t) => {
      t.increments("connectionID").primary();
      t.integer("personID_1")
        .unsigned()
        .notNullable()
        .references("people.personID")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("personID_2")
        .unsigned()
        .notNullable()
        .references("people.personID")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.bool("status").notNullable().defaultTo(false);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("connections");
};
