exports.up = function (knex) {
  return knex.schema
    .createTable("comments", (t) => {
      t.increments("commentID").primary();
      t.integer("chatroomID")
        .unsigned()
        .notNullable()
        .references("chatroomID")
        .inTable("chatrooms")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.integer("personID")
        .unsigned()
        .notNullable()
        .references("personID")
        .inTable("people")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t.string("comment").notNullable();
      t.timestamp("postTime").defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("comments");
};
