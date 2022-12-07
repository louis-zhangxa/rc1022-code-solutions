SELECT "a"."firstName",
      "a"."lastName"
      from "actors" as "a"
      join "castMembers" using ("actorId")
      join "films" using ("filmId")
      WHERE "films"."title" = 'Jersey Sassy'
