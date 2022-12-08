-- select "f"."title",
--       "f"."description",
--       "f"."rating"
--         sum("p"."amount") as "totalProfit"
--         from "films" as "f"
--         join "inventory" using "filmId"
--         join "rentals" using "inventoryId"
--         join "payments" using "rentalId"


-- with profit as (
-- select
-- )

-- select "f"."title",
--       "f"."description",
--       "f"."rating"
--         sum("p"."amount") - "f"."replacementCost" as "totalProfit"
--         from "films" as "f"
--         join "inventory" using "filmId"
--         join "rentals" using "inventoryId"
--         join "payments" using "rentalId"
--         group by "f"."title"
