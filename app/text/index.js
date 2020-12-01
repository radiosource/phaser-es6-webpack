import idiom from 'idiom.js'
const dictionary = require('./dictionary');
const lang = idiom(dictionary);

module.exports = lang(window.navigator.language);
