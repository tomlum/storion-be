const moment = require("moment")

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("articles").del()
    .then(() => knex("stories").del())
    .then(() => knex("stories").insert([
        {
          id: 1,
          title: "Rockstar's Overworking Controversy",
          description: "It ain't easy being a cowboy."
        }
    ]))
    .then(() => knex("articles").insert([
        {
          id: 1,
          storyID: 1,
          time: moment("2018-10-14 12:00:00").toDate(),
          headline: "Rockstar says they work 100 hour weeks",
          link:
            "http://www.vulture.com/2018/10/the-making-of-rockstar-games-red-dead-redemption-2.html"
        },
        {
          id: 2,
          storyID: 1,
          time: moment("2018-10-15 12:00:00").toDate(),
          headline: "Rockstar clarifies some work 100 hour weeks",
          link:
            "https://kotaku.com/we-were-working-100-hour-weeks-red-dead-redemption-2-h-1829758281"
        },
        {
          id: 3,
          storyID: 1,
          time: moment("2018-10-19 12:00:00").toDate(),
          headline: "Rockstar lifts social media ban",
          link:
            "https://www.kotaku.com.au/2018/10/red-dead-redemption-2-developers-speak-out-after-rockstar-lifts-social-media-ban/"
        }
    ]))
}
