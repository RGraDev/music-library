const db = require('../db/index');

const createArtist = async (req, res) => {
  const { name, genre } = req.body

  try {
    const { rows: [artist] } = await db.query('INSERT INTO artists (name, genre) VALUES ($1, $2) RETURNING *', [name, genre])
    res.status(201).json(artist)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

const read = async (_, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM artists');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

const getArtistByID = async (req, res) => {
  try {
    const { rows: [artist] } = await db.query(`SELECT * FROM artists WHERE id = ${req.params.id}`);

    if (!artist) {
      return res.status(404).json({ message: `artist ${req.params.id} does not exist` })
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = { createArtist, read, getArtistByID }
