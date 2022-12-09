const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'Grade Id must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
      where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  if (!req.body.name || !req.body.course || !req.body.score || !Number.isInteger(score) || score < 0 || score > 100) {
    const erroeMessage = { error: 'PUT SOMETHING PLEASE!!!!' };
    res.status(400).json(erroeMessage);
    return;
  }
  const sql = `
  INSERT into "grades" ("name", "course", "score")
  VALUES ($1, $2, $3)
  RETURNING *
  `;

  const VALUES = [req.body.name, req.body.course, req.body.score];

  db.query(sql, VALUES)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'insterd failed'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'Grade Id must be a positive integer'
    });
    return;
  }
  const score = Number(req.body.score);
  if (!req.body.name || !req.body.course || !req.body.score || !Number.isInteger(score) || score < 0 || score > 100) {
    const erroeMessage = { error: 'PUT SOMETHING PLEASE!!!!' };
    res.status(400).json(erroeMessage);
    return;
  }

  const sql = `
  UPDATE "grades"
  SET "name" = $1,
      "course" = $2,
      "score" = $3
  WHERE "gradeId" = $4
  RETURNING *
  `;

  const values = [req.body.name, req.body.course, req.body.score, gradeId];

  db.query(sql, values)
    .then(result => {
      const row = result.rows[0];
      if (!row) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'Grade Id must be a positive integer'
    });
    return;
  }

  const sql = `
  DELETE
  FROM "grades"
  WHERE "gradeId" = $1
  RETURNING *
  `;

  const values = [gradeId];

  db.query(sql, values)
    .then(result => {
      const row = result.rows[0];
      if (!row) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
}
);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is aaallllliiiivvveeee!!!!!');
});
