exports.up = function (knex) {
  return knex.schema
    .createTable("chatrooms", (t) => {
      t.increments("chatroomID").primary();
      t.string("chatroomName").notNullable();
      t.string("person1").notNullable();
      t.string("person2").notNullable();
      t.string("person3").notNullable();
      t.string("person4").notNullable();
      t.string("person5").notNullable();
      t.string("person6").notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("chatrooms");
};
