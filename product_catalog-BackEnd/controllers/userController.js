const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../modules/modules');

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async regestration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequst(''));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequst(''));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const token = generateJWT(user.id, user.email, user.role);

    await Basket.create({ userId: user.id });

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequst(''));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (comparePassword) {
      return next(ApiError.badRequst(''));
    }
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);

    res.json({ token });
  }
}

module.exports = new UserController();
