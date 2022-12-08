select "g"."name" as "genre",
count ("g"."genreId") as "total"
from "genres" as "g"
join "filmGenre" using ("genreId")
join "castMembers" using ("filmId")
join "actors" as "a" using ("actorId")
where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
group by "g"."name"
