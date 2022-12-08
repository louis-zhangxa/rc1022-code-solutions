select "c"."name" as "country",
count ("t".*) as "totalCities"
from "countries" as "c"
join "cities" as "t" using ("countryId")
group by "c"."countryId"
