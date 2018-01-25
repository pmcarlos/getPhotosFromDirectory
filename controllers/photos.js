const Photo = require('../models/photo');

module.exports = {
    save:  (doc, count, total) => {
        const photo = new Photo(doc);
     
        photo.save()
          .then(function() {
            console.log('Photo saved #' + count + ' of ' + total);
          }, function(err) {
            console.log('Photo not saved #' + count + ' of ' + total);
          });        
    }

}