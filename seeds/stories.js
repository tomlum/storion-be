const moment = require("moment")

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("articles").del()
    .then(() => knex("stories").del())
    .then(() => knex("stories").insert([
        {
          public: false,
          owner: "tomlumperson@gmail.com",
          title: "Rockstar's Overworking Controversy",
          description: "It ain't easy being a cowboy."
        }
    ]))
    .then(() => knex("articles").insert([
        {
          storyID: 1,
          tags: "Rockstar",
          owner: "tomlumperson@gmail.com",
          headline: "Rockstar says they work 100 hour weeks",
          link:
            "http://www.vulture.com/2018/10/the-making-of-rockstar-games-red-dead-redemption-2.html"
        },
        {
          storyID: 1,
          tags: "Rockstar",
          owner: "tomlumperson@gmail.com",
          headline: "Rockstar clarifies some work 100 hour weeks",
          link:
            "https://kotaku.com/we-were-working-100-hour-weeks-red-dead-redemption-2-h-1829758281"
        },
        {
          storyID: 1,
          tags: "Rockstar",
          owner: "tomlumperson@gmail.com",
          headline: "Rockstar lifts social media ban",
          link:
            "https://www.kotaku.com.au/2018/10/red-dead-redemption-2-developers-speak-out-after-rockstar-lifts-social-media-ban/"
        }
    ]))
}
