/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
 // Get a reference to the Translate API component
const translate = require('@google-cloud/translate')();
 
exports.translateHttp = function translateHttp (req, res) {


      const options = {
        from: "ro",
        to: "en"
      };

  res.send(translate.translate(req.body.text, options));
};
