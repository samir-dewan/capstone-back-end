exports.up = function (knex) {
  return knex.schema
    .createTable("people", (table) => {
      table.increments("personID").primary();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("nationality").notNullable();
      table.string("townOfOrigin").notNullable();
      table.string("addressOfOrigin").notNullable();
      table.specificType("photo", "blob");
      table.string("email").notNullable();
      table.integer("interestID").notNullable();
      table.timestamp("birthday").notNullable();
      table.string("description");
      table.string("address").notNullable();
      table.string("postcode").notNullable();
      table.integer("latitude");
      table.integer("longitude");
      table.timestamp("lastLogin").defaultTo(knex.fn.now());
      table.timestamp("createdAt").defaultTo(knex.fn.now());
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('people');
}