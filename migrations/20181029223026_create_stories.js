exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable("stories", table => {
  		table.increments("id").primary()
  		table.string("title")
  		table.string("description")
  	}),
    knex.schema.createTable("articles", table => {
      table.increments("id").primary()
      table.string("headline")
      table.string("link")
      table.dateTime("time")
      table.integer("storyID").references("stories.id")
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable("stories"),
  	knex.schema.dropTable("articles")
  ])
};
