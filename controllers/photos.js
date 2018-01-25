const Photo = require('../models/photo');

module.exports = {
    save: async (doc, count, total) => {
        const photo = new Photo(doc);
     
        await photo.save();

        console.log('Photo saved #' + count + ' of ' + total);
    }

}