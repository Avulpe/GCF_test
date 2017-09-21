/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
 // Get a reference to the Translate API component
const translate = require('@google-cloud/translate')();
 
exports.translateHttp = function translateHttp (req, res) {
if (!req.text) {
        throw new Error('Text not provided. Make sure you have a "text" property in your request');
      }
      if (!payload.lang) {
        throw new Error('Language not provided. Make sure you have a "lang" property in your request');
      }

      const options = {
        from: "ro",
        to: "en"
      };

      console.log(`Translating text into `);
      return translate.translate(payload.text, options);

  res.send(translate.translate(payload.text, options));
};
