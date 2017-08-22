/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloHttp1 = function helloHttp1 (req, res) {
  res.send(`Hello ${req.body.name || 'World'}! Nice to be here!:-)\n`);
};
