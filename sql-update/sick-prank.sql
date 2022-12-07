UPDATE "films"
set "rating" = 'G'
WHERE "rating" = 'NC-17'
RETURNING *
