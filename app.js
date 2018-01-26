
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PhotosController = require('./controllers/photos');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://movilidad:passaro2017@ds115758.mlab.com:15758/fotosmovilidad', {
    //useMongoClient: true
});
const app = express();

const photosRoute = require('./routes/photos');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 10000000, limit: '50mb' }));

app.use('/photos', photosRoute);

// var fs = require('fs');
 
// if (process.argv.length <= 2) {
//     console.log("Usage: " + __filename + " path/to/directory");
//     process.exit(-1);
// }
 
// var path = process.argv[2];
// fs.readdir(path, function(err, items) {
//   const total = items.length;

//   for (var i=0; i<items.length; i++) {
//     var file = path + '/' + items[i];
//     let count = i+1;
//     var date = '';
//     let imei = items[i].split('_');
//     let photo = items[i];
//     if(imei[0]=='i') {
//         imei = imei[1];
//     } else {
//         imei = imei[0];
//     }

//     imei = imei.slice(0,14);

//     fs.stat(file, function(f) {
//       return function(err, stats) {
//         let doc = {
//           photo: photo,
//           imei: imei,
//           date: stats['birthtime']
//         };
        
//         PhotosController.save(doc, count, total);        
//       }
//     }(file));
//   }

// });
//start server
const port = process.env.PORT  || 3001;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
