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

    getPhoto: async (req, res, next) => {
        console.log('getphoto');
        const {imei} = req.params;
        const date = new Date(req.params.date);

        const photo = await Photo.findOne({imei: imei, date: {'$lte':date}}).sort({date: 'desc'});

        if(!photo) 
            error('No existe',
                `No existe una photo para el imei: ${req.params.imei} en la fecha ${req.params.date}`,404); 

        const response = [photo, date];

        request('http://drongeic.mx:8080/movilidad/uploads/'+photo.photo).pipe(res);
        
    },

}