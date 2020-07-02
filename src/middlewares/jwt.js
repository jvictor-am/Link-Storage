const { verifyJwt } = require('../helpers/jwt');

const checkJwt = (req, res, next) => {
  let token = req.headers['authorization'];

  token = token ? token.slice(7, token.length) : null;
  if (!token) {
    return res.jsonUnauthorized(null, 'Invalid token');
  }

  try {
    const decoded = verifyJwt(token);
    req.accountId = decoded.id;
    next();
  } catch {
    return res.jsonUnauthorized(null, 'Invalid token');
  }
};
// console.log('decoded', decoded, new Date(decoded.exp * 1000));
// console.log('Token', token);

module.exports = checkJwt;
