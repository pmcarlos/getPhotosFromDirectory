var router = require('express-promise-router')();

const PhotosController = require('../controllers/photos');



router.route('/:imei/:date')
    .get(PhotosController.getPhoto);

module.exports = router;