const uuid = require('uuid');
const path = require('path');
const Models = require('../models');
var fs = require('fs');
const ApiError = require('../error/ApiError');

var getFiles = function (dir, files_){
    
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (var i in files){
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()){
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
};

let idCounter = 1;

const files = getFiles(path.resolve(__dirname,'..', 'data', 'phones')).map(file => {
  const buffer = fs.readFileSync(file);
  
  return JSON.parse(buffer.toString());
});

files.map(file => {
  const fileId = file.id;
  file.id = idCounter++;

  return {
    ...file,
    category: 'phones',
    itemId: fileId,
    phoneId: fileId,
    description: JSON.stringify(file.description)
  };
});

class DeviceController {
  // async create(req, res, next) {
  //   try {
  //     const { image } = req.files;
  //     const filesName = uuid.v4() + '.jpg';
  //     image.mv(path.resolve(__dirname, '..', 'static', filesName));

  //     const device = await Models.Device.create({
  //       ...req.body,
  //       image: filesName,
  //     });

  //     return res.json(device);
  //   } catch (e) {
  //     next(ApiError.badRequst(e));
  //   }
  // }

  async getAll(req, res) {
    const { category, limit = 1, page = 9 } = req.query;
    // let offset = page * limit - limit;
    // let devices = await Models.Device.findAll();
    let devices = files;
    if (category) {
      devices = files.felter(file => file.category === 'phones');
      //  Models.Device.findAndCountAll({
      //   where: { category },
      //   limit,
      //   offset,
      // });
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    // const device = await Models.Device.findOne({ where: { id } });
    const device = files.find(file => file.id === +id);
    return res.json(device);
  }
}




module.exports = new DeviceController();
