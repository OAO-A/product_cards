const uuid = require('uuid');
const path = require('path');
const { Device } = require('../modules/modules');
const phones = require('../data/phones');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const { image } = req.files;
      const filesName = uuid.v4() + '.jpg';
      image.mv(path.resolve(__dirname, '..', 'static', filesName ));

      const device = await Device.create({
        ...req.body,
        image: filesName,
      });

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequst(e));
    }
  }

  async getAll(req, res) {
    // const { category, limit = 1, page = 9 } = req.query;
    // let devices = await Device.findAndCountAll({ limit, offset });
    // let offset = page * limit - limit;
    // if (!category) {
    //   devices = await Device.findAndCountAll({
    //     where: { category },
    //     limit,
    //     offset,
    //   });
    // }

    // return res.json(devices);
    return res.json(phones);
  }

  async getOne(req, res) {
    const { id } = req.body;
    const device = await Device.findOne({ where: { id } });
    return res.json(device);
  }
}

module.exports = new DeviceController();
