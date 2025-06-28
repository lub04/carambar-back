const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const jokes = await tables.joke.readAll();
    res.json(jokes);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    let joke;
    if (req.query.mode === "random") {
      joke = await tables.joke.readRandom();
    } else {
      joke = await tables.joke.read(req.params.id);
    }
    if (joke == null) {
      res.sendStatus(404);
    } else {
      res.json(joke);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const joke = req.body;

  try {
    const insertId = await tables.joke.create(joke);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
