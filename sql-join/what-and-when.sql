SELECT "f"."releaseYear",
        "g"."name",
        "f"."title"
        FROM "films" as "f"
        JOIN "filmGenre" USING ("filmId")
        JOIN "genres" as "g" USING ("genreId")
        WHERE "f"."title" = 'Boogie Amelie'
