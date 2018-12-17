exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable("stories", table => {
  		table.increments("id").primary()
      table.boolean("public")
      table.string("owner")
  		table.string("title")
  		table.string("description")
  	}),
    knex.schema.createTable("articles", table => {
      table.increments("id").primary()
      table.string("owner")
      table.string("headline")
      table.string("tags")
      table.string("link")
      table.dateTime("time").notNullable().defaultTo(knex.raw('now()'))
      table.integer("storyID").nullable().references("stories.id")
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("articles"),
  	knex.schema.dropTable("stories")
  ])
};
