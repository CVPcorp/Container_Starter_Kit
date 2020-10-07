const db = require('./db');

const init = () => {
  const sql = 'CREATE TABLE IF NOT EXISTS posts(' +
                'id serial PRIMARY KEY,' +
                'title VARCHAR (100) NOT NULL,' +
                'content VARCHAR (1000) NOT NULL,' +
                'created_on TIMESTAMP NOT NULL);';
  db.none(sql)
    .then(() => {
      console.log('DB initialized & posts table created');
    })
    .catch((err) => {
      console.log(err);
    });  
}

const getPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      return next(err);
    });
}

const createPost = (req, res, next) => {
  const sql = 'INSERT INTO posts(title, content, created_on) ' +
              'VALUES(${title}, ${content}, current_timestamp) returning *';
  db.one(sql, req.body)
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      return next(err);
    });
}

const deletePost = (req, res, next) => {
  db.result('DELETE FROM posts WHERE id = $1', req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      return next(err);
    });
}

module.exports = {
  init,
  getPosts,
  createPost,
  deletePost
}