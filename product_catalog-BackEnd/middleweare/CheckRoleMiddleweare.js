const jwt = require('jsonwebtoken');

const CheckRoleMiddleweare = (role) => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      return next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'User is not authorized' });
      }
      const decoder = jwt.verify(token, process.env.SECRET_KEY);
      if (decoder.rele !== role) {
        return res.status(403).json({ message: '' });
      }
      req.user = decoder;
      next();
    } catch (e) {
      res.status(401).json({ massage: 'User is not authorized' });
    }
  };
};

module.exports = CheckRoleMiddleweare;
