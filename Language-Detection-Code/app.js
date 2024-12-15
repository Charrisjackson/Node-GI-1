const LanguageDetect = require('languagedetect'); //loading in npm lamguage detect module after installing
const lngDetector = new LanguageDetect(); //new instance of lamguagedetect class

//logging  function call with text sample as args into the console.
console.log(lngDetector.detect(('Es macht gut')));  
console.log(lngDetector.detect(('Dobrá práce')));
console.log(lngDetector.detect(('Gwaith da')));
