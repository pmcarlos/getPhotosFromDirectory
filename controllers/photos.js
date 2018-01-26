const Photo = require('../models/photo');
const request = require('request');

module.exports = {
    save:  (doc, count, total) => {
        const photo = new Photo(doc);
     
        photo.save()
          .then(function() {
            console.log('Photo saved #' + count + ' of ' + total);
          }, function(err) {
            console.log('Photo not saved #' + count + ' of ' + total);
          });        
    },

    getPhoto: (req, res, next) => {
        console.log('getphoto');
        const {imei} = req.params;
        const date = new Date(req.params.date);

        Photo.findOne({imei: imei, date: {'$lte':date}}).sort({date: 'desc'})
            .then(function(photo) {
                if(!photo) {
                    return res.status(404).json('Not found');
                    console.log(`No existe una photo para el imei: ${req.params.imei} en la fecha ${req.params.date}`);
                } else {
                    request('http://drongeic.mx:8080/movilidad/uploads/'+photo.photo).pipe(res);
                }

                

            }, function(err) {
                console.log('error');
            });

        
        
    },

}