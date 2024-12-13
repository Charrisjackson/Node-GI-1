const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
console.log(lngDetector.detect(('Es macht gut')));
console.log(lngDetector.detect(('Dobrá práce')));
console.log(lngDetector.detect(('Gwaith da')));
