const uuid = require('uuid');
const path = require('path');
const Models = require('../models');
var fs = require('fs');
const phones = require('../data/phones');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const { image } = req.files;
      const filesName = uuid.v4() + '.jpg';
      image.mv(path.resolve(__dirname, '..', 'static', filesName));

      const device = await Models.Device.create({
        ...req.body,
        image: filesName,
      });

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequst(e));
    }
  }

  async getAll(req, res) {
    const { category, limit = 9, page = 9 } = req.query;
    let offset = page * limit - limit;
    let devices = await Models.Device.findAndCountAll({ limit, offset });
    if (category) {
      devices = await Models.Device.findAndCountAll({
        where: { category },
        limit,
        offset,
      });
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    console.log(Models.Device);
    const device = await Models.Device.findOne({ where: { id } });
    return res.json(device);
  }
}

// var getFiles = function (dir, files_){
    
//   files_ = files_ || [];
//   const files = fs.readdirSync(dir);
//   for (var i in files){
//     const name = dir + '/' + files[i];
//     if (fs.statSync(name).isDirectory()){
//       getFiles(name, files_);
//     } else {
//       files_.push(name);
//     }
//   }
//   return files_;
// };

// const files = getFiles('C:/project/product_cards/product_catalog-FrontEnd/src/api/phones').map(file => {
//   const buffer = fs.readFileSync(file);
  
//   return JSON.parse(buffer.toString());
// });

// files.forEach(file => {
//   const fileId = file.id;
//   delete file.id;

//   console.log(file.description);
//   Models.Device.create({
//     ...file,
//     category: 'phones',
//     itemId: fileId,
//     phoneId: fileId,
//     description: JSON.stringify(file.description)
//   });
// });


module.exports = new DeviceController();
