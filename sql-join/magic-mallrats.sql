SELECT "c"."firstName",
      "c"."lastName"
      FROM "customers" as "c"
      JOIN "rentals" using ("customerId")
      join "inventory" using ("inventoryId")
      join "films" using ("filmId")
      WHERE "films"."title" = 'Magic Mallrats'
