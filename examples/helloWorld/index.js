/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloHttp = function helloHttp2 (req, res) {
  res.send(`Hello ${req.body.name || 'World'}! Nice to be here ! :-)`);
};
