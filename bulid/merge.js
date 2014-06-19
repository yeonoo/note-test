var fs = require('fs');

var data1 = fs.readFileSync('../src/html-editor.js', 'utf8');
var data2 = fs.readFileSync('../src/app.js', 'utf8');

var all =  data1 + data2 ;


fs.writeFileSync('all.js', all);

console.log('good!');