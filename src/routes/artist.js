const express = require('express');
const artistController = require('../controllers/artist');

const router = express.Router();

router.post('/', artistController.createArtist);
router.get('/', artistController.read);
router.get('/artists/:id', artistController.getArtistByID);
router.put('/artists/:id', artistController.putArtist);
router.patch('/artists/:id', artistController.updateArtistByID);
router.delete('/artists/:id', artistController.deleteArtistByID);

module.exports = router;
