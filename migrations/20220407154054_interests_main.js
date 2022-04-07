exports.up = function (knex) {
  return knex.schema.createTable("interests", (table) => {
    table.integer("personID").unsigned().notNullable().references("personID").inTable("people").onUpdate("CASCADE").onDelete("CASCADE");
    table.string("interest1");
    table.string("interest2");
    table.string("interest3");
    table.string("interest4");
    table.string("interest5");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("interests");
};
