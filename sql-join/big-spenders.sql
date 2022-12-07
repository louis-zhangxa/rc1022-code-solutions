SELECT "c"."firstName",
      "c"."lastName",
      "p"."amount"
      FROM "payments" as "p"
      JOIN "customers" as "c" USING ("customerId")
      ORDER by "amount" DESC
      LIMIT 10;
