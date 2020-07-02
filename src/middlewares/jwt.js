const { verifyJwt, getTokenFromHeaders } = require('../helpers/jwt');

const checkJwt = (req, res, next) => {
  const { url: path } = req;

  const excludedPaths = ['/auth/signIn', '/auth/signUp', '/auth/refresh'];
  const isExcluded = !!excludedPaths.find((p) => p.startsWith(path));
  if (isExcluded) return next();

  const token = getTokenFromHeaders(req.headers);
  if (!token) {
    return res.jsonUnauthorized(null, 'Invalid token');
  }

  try {
    const decoded = verifyJwt(token);
    req.accountId = decoded.id;
    next();
  } catch (error) {
    return res.jsonUnauthorized(null, 'Invalid token');
  }
};
// console.log('decoded', decoded, new Date(decoded.exp * 1000));
// console.log('Token', token);

module.exports = checkJwt;
